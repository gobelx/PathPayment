# PathPayment



Herramienta que cumple con la funcion de enviar y convertir divisas en una sola transacción permitiendo realizar pagos transfronterizos.



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
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codigo del Activo Destino</font></font></td>
<td><code>USDT</code></td>
</tr>
<tr>
<td><code>destination_assets_issuer</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cuenta del emisor del Activo Destino</font></font></td>
<td><code>GCQTGZQQ5G4PTM2GL7CDIFKUBIPEC52BROAQIAPW53XBRJVN6ZJVTG6V</code></td>
</tr>
<tr>
<td><code>source_asset_type</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tipo de Activo Destino</font></font></td>
<td><code>native</code></td>
</tr>
<tr>
<td><code>source_asset_issuer</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"></font>Cuenta del Remitente del Activo Origen </font></td>
<td><code>-----</code></td>
</tr>
<tr>
<td><code>source_asset_code</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codigo del Activo origen</font></font></td>
<td><code>XLM</code></td>
</tr>
<tr>
<td><code>source_asset_amount</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Monto a enviar del Activo Origen </font><font style="vertical-align: inherit;"></font></font></td>
<td><code>0.000001</code></td>
</tr>
</tbody>
</table>


<h2>Respuesta</h2>

<pre class="cm-s-monokai CodeMirror codeBlock codeBlock--syntaxHighlight"><code class="language-json">{
        <span class="cm-string">"success"</span>: <span class="cm-string">true</span>,
        <span class="cm-string">"path"</span>: <span class="cm-string">"XLM => CENTUS => LINK => USDT"</span>,
        <span class="cm-string">"amountRute"</span>: <span class="cm-string">"0.0000023"</span>,
                <span class="cm-string">"path"</span>: [
                {
                        <span class="cm-string cm-property">"code"</span>: <span class="cm-string">"CENTUS"</span>,
                        <span class="cm-string cm-property">"issuer"</span>: <span class="cm-string">"GAKMVPHBET4T7DPN32ODVSI4AA3YEZX2GHGNNSBGFNRQ6QEVKFO4MNDZ"</span>,
                                        }
        ],
        <span class="cm-string">"code"</span>: <span class="cm-string">"LINK"</span>,
        <span class="cm-string">"issuer"</span>: <span class="cm-string">"GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR"</span>,
                
}
</code></pre>
