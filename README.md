# PathPayment



Herramienta que permite enviar y convertir divisas en una sola transacción



<h1>Uso</h1>


<pre><code>POST pathpayment.gobelx.io/api/ruta-path</code></pre>


<h2>Argumentos</h2>

<table>
<thead>
<tr>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nombre</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Notas</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Descripción</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ejemplo</font></font></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>destination_assets_code</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codigo del Activo destino</font></font></td>
<td><code>USDV</code></td>
</tr>
<tr>
<td><code>destination_assets_issuer</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">El emisor del activo destino</font></font></td>
<td><code>GA6E6YDYXXAXG4VZAOGIX3N3HETLMGVBLQKAAIZQ3PIMQGHAQ63RA6EO</code></td>
</tr>
<tr>
<td><code>source_asset_type</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tipo de Activo destino</font></font></td>
<td><code>credit_alphanum4</code></td>
</tr>
<tr>
<td><code>source_asset_issuer</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"></font>El remitente del activo </font></td>
<td><code>GA6E6YDYXXAXG4VZAOGIX3N3HETLMGVBLQKAAIZQ3PIMQGHAQ63RA6EO</code></td>
</tr>
<tr>
<td><code>source_asset_code</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codigo del activo origen</font></font></td>
<td><code>BSS</code></td>
</tr>
<tr>
<td><code>source_asset_amount</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Monto a enviar del activo origen </font><font style="vertical-align: inherit;"></font></font></td>
<td><code>20</code></td>
</tr>
</tbody>
</table>
