const express = require('express');
const Stellar = require("stellar-sdk");
var CONNECT = Stellar.Networks.PUBLIC;
const request = require('request');
var server = new Stellar.Server("https://horizon.stellar.org");
const { TimeoutInfinite } = require("stellar-base");
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(cors());


app.post('/api/ruta-path', async function (req, res) {
    var destination_assets_code = req.body.destination_assets_code;
    var destination_assets_issuer = req.body.destination_assets_issuer;
    var source_asset_type = req.body.source_asset_type
    var source_asset_issuer = req.body.source_asset_issuer;
    var source_asset_code = req.body.source_asset_code;
    var source_amount = req.body.source_asset_amount;
    var urls = " https://horizon.stellar.org/paths/strict-send";

    //Destino
    if (destination_assets_issuer != undefined) {
        urls += "?destination_assets=" + destination_assets_code
        urls += "%3A" + destination_assets_issuer;

    } else {
        urls += "?destination_assets=native";
    }

    urls += "&source_asset_type=" + source_asset_type;

    if (source_asset_issuer != undefined) {
        urls += "&source_asset_issuer=" + source_asset_issuer + "&source_asset_code=" + source_asset_code;
    }

    urls += "&source_amount=" + source_amount;
    console.log(source_asset_type)
    console.log(urls)

    request(urls, async function (error, response, body) {
        var result = JSON.parse(body);
        console.log(result)
        result = result._embedded.records;
        var inicio = source_asset_code;
        var fin = destination_assets_code;
        var amountRute = 0;
        for (var i = 0; i < result.length; i++) {
            if (amountRute < result[i].destination_amount) {
                inicio = source_asset_code;
                fin = destination_assets_code;
                amountRute = result[i].destination_amount;
                var path = [];
                console.log(result[i].path)
                console.log(result[i].path.length)

                for (var x = 0; x < result[i].path.length; x++) {
                    console.log(result[i].path[x].code)
                    console.log(result[i].path[x].asset_type);
                    if (result[i].path[x].asset_type == 'native') {
                        inicio = inicio + " => " + "XLM";
                        path.push(new Stellar.Asset.native())
                    } else {
                        console.log("paso el path");
                        console.log(inicio)
                        inicio = inicio + " => " + result[i].path[x].asset_code
                        path.push(new Stellar.Asset(result[i].path[x].asset_code, result[i].path[x].asset_issuer))
                    }
                }


                inicio = inicio + " => " + fin
            }

        }
        console.log(path);
        res.send({ "success": true, "path": inicio, "amountRute": amountRute, "pathStellar": path });
    });

})

app.get('/', async function (req, res) {
    res.send({ "Online": true, "Api":"PathPaymentStellar", "Version":"1.0"});

});

app.post('/api/ruta-path-operation', async function (req, res) {
    var destination_assets_code = req.body.destination_assets_code;
    var destination_assets_issuer = req.body.destination_assets_issuer;
    var source_asset_issuer = req.body.source_asset_issuer;
    var source_asset_code = req.body.source_asset_code;
    var source_amount = req.body.source_asset_amount;
    var public_key = req.body.public_key;
    var public_key_dest = req.body.public_key_dest;
    var precio = req.body.amountRute;
    var path2 = JSON.parse(req.body.path);
    var memo_type = req.body.memo_type;
    var memo = req.body.memo;
    var comision_op = req.body.comision_op;
    var llave_privada = req.body.llave_privada;
    var pathr = [];


    console.log("elpa", path2)
    for (var i = 0; i < path2.length; i++) {
        console.log(path2[i].code);
        if (path2[i].code == 'XLM') {
            pathr.push(new Stellar.Asset.native())

        } else {
            pathr.push(new Stellar.Asset(path2[i].code, path2[i].issuer))

        }


    }
    const transaction = async () => {
        const standardTxFee = await server.fetchBaseFee();
        var feexlm = standardTxFee + 1000;

        if (source_asset_code == "XLM") {
            var sylAsset = Stellar.Asset.native();
        } else {
            var sylAsset = new Stellar.Asset(source_asset_code, source_asset_issuer);
        }

        if (destination_assets_code == "XLM") {
            var sylAsset2 = Stellar.Asset.native();
        } else {
            var sylAsset2 = new Stellar.Asset(destination_assets_code, destination_assets_issuer);
        }

        console.log(standardTxFee)

        const txOptions = {
            fee: feexlm,
            networkPassphrase: CONNECT
        };
        const accountA = await server.loadAccount(public_key);

        var paymentToB = {
            sendAsset: sylAsset,
            sendAmount: source_amount.toString(),
            destination: public_key_dest,
            destAsset: sylAsset2,
            destMin: precio,
            path: pathr

        };
        console.log(paymentToB)
        if (memo_type == "id") {
            var transaction = new Stellar.TransactionBuilder(accountA, txOptions)
                .addOperation(Stellar.Operation.pathPaymentStrictSend(paymentToB))
                .addMemo(Stellar.Memo.id(memo))
                .setTimeout(40)
        }

        if (memo_type == "text") {
            var transaction = new Stellar.TransactionBuilder(accountA, txOptions)
                .addOperation(Stellar.Operation.pathPaymentStrictSend(paymentToB))
                .addMemo(Stellar.Memo.text(memo))
                .setTimeout(40)
        }

        if (memo_type == "hash") {
            var transaction = new Stellar.TransactionBuilder(accountA, txOptions)
                .addOperation(Stellar.Operation.pathPaymentStrictSend(paymentToB))
                .addMemo(Stellar.Memo.hash(memo))
                .setTimeout(40)
        }

        if (memo_type == "return") {
            var transaction = new Stellar.TransactionBuilder(accountA, txOptions)
                .addOperation(Stellar.Operation.pathPaymentStrictSend(paymentToB))
                .addMemo(Stellar.Memo.return(memo))
                .setTimeout(40)
        }

        if (memo_type == undefined) {
            var transaction = new Stellar.TransactionBuilder(accountA, txOptions)
                .addOperation(Stellar.Operation.pathPaymentStrictSend(paymentToB))
                .setTimeout(40)
        }






        if (comision_op) {

            var paymentToC = {
                destination: "GCEOQCK55IEOM6FAWVMW7L2NZQVKZHEECCKSJSAQKRHI2UHRD2UFEMUE",
                asset: Stellar.Asset.native(),
                amount: comision_op,
            };

            transaction.addOperation(Stellar.Operation.payment(paymentToC));

        }

        transaction = transaction.build();
        const StellarPairA = Stellar.Keypair.fromSecret(llave_privada);

        transaction.sign(StellarPairA);

        try {
            var result = await server.submitTransaction(transaction);
            console.log(result)
            res.send({ "success": true });
        } catch (e) {
            console.log(e.response.data.extras.result_codes.operations)
            res.send({ "success": false, "error": e.response.data.extras.result_codes.operations });
        }

    };



    transaction()
        .then(async () => {

        }).catch(e => {
            throw e;
        });



})

app.listen(2000, function (err) {
    if (err) console.log(err);
    console.log("El servidor se ha iniciado en el puerto:", 1001, ", http://127.0.0.1:1001");
});