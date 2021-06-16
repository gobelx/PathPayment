# PathPayment



Herramienta que permite enviar y convertir divisas en una sola transacción



<h1>Uso</h1>


<pre><code>GET /paths?destination_account={da}&amp;source_account={sa}&amp;destination_asset_type={at}&amp;destination_asset_code={ac}&amp;destination_asset_issuer={di}&amp;destination_amount={amount}
</code></pre>


<h2>Argumentos</h2>

<table>
<thead>
<tr>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nombre</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">notas</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">descripción</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ejemplo</font></font></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>?destination_account</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cuerda</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">La cuenta de destino que debe usar cualquier ruta devuelta</font></font></td>
<td><code>GAEDTJ4PPEFVW5XV2S7LUXBEHNQMX5Q2GM562RJGOQG7GVCE5H3HIB4V</code></td>
</tr>
<tr>
<td><code>?destination_asset_type</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cuerda</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">El tipo de activo de destino</font></font></td>
<td><code>credit_alphanum4</code></td>
</tr>
<tr>
<td><code>?destination_asset_code</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cuerda</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">El código de activo de destino, si destination_asset_type no es "nativo"</font></font></td>
<td><code>USD</code></td>
</tr>
<tr>
<td><code>?destination_asset_issuer</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cuerda</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">El emisor del destino, si destination_asset_type no es "nativo"</font></font></td>
<td><code>GAEDTJ4PPEFVW5XV2S7LUXBEHNQMX5Q2GM562RJGOQG7GVCE5H3HIB4V</code></td>
</tr>
<tr>
<td><code>?destination_amount</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cuerda</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">La cantidad, denominada en el activo de destino, que cualquier ruta devuelta debería poder satisfacer</font></font></td>
<td><code>10.1</code></td>
</tr>
<tr>
<td><code>?source_account</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cuerda</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">La identificación de la cuenta del remitente. </font><font style="vertical-align: inherit;">Cualquier ruta devuelta debe usar una fuente que el remitente pueda contener.</font></font></td>
<td><code>GARSFJNXJIHO6ULUBK3DBYKVSIZE7SC72S5DYBCHU7DKL22UXKVD7MXP</code></td>
</tr>
</tbody>
</table>
