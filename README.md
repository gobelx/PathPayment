# PathPayment (JavaScript)



Tool that fulfills the function of sending and converting currencies in a single transaction, allowing you to make cross-border payments.



<h1>Use</h1>


<pre><code>POST pathpayment.gobelx.io/api/ruta-path</code></pre>


<h2>Arguments</h2>

<table>
<thead>
<tr>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Name</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Notes</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Description</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Example</font></font></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>destination_assets_code</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Destination Asset Code</font></font></td>
<td><code>USDT</code></td>
</tr>
<tr>
<td><code>destination_assets_issuer</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Destination Asset issuer account</font></font></td>
<td><code>GCQTGZQQ5G4PTM2GL7CDIFKUBIPEC52BROAQIAPW53XBRJVN6ZJVTG6V</code></td>
</tr>
<tr>
<td><code>source_asset_type</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Destination Asset Type</font></font></td>
<td><code>native</code></td>
</tr>
<tr>
<td><code>source_asset_issuer</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"></font>Origin Asset Sender Account</font></td>
<td><code>-----</code></td>
</tr>
<tr>
<td><code>source_asset_code</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Source Asset Code</font></font></td>
<td><code>XLM</code></td>
</tr>
<tr>
<td><code>source_asset_amount</code></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Amount to send from Asset Origin </font><font style="vertical-align: inherit;"></font></font></td>
<td><code>0.000001</code></td>
</tr>
</tbody>
</table>


<h2>Answer</h2>

<pre class="cm-s-monokai CodeMirror codeBlock codeBlock--syntaxHighlight"><code class="language-json">{
        <span class="cm-string">"success"</span>: <span class="cm-string">true</span>,
        <span class="cm-string">"path"</span>: <span class="cm-string">"XLM => CENTUS => LINK => USDT"</span>,
        <span class="cm-string">"amountRute"</span>: <span class="cm-string">"0.0000023"</span>,
                <span class="cm-string">"path"</span>: [
                {
                        <span class="cm-string cm-property">"code"</span>: <span class="cm-string">"CENTUS"</span>,
                        <span class="cm-string cm-property">"issuer"</span>: <span class="cm-string">"GAKMVPHBET4T7DPN32ODVSI4AA3YEZX2GHGNNSBGFNRQ6QEVKFO4MNDZ"</span> 
                        },
                        {
                <span class="cm-string">"code"</span>: <span class="cm-string">"LINK"</span>,
        <span class="cm-string">"issuer"</span>: <span class="cm-string">"GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR"</span>,
                
         }
     ]
}
</code></pre>


<h2>User Guide</h2>

Step 1: Enter the Recipient's Wallet

 <img src="https://prontopagos.io/static/img/doc/doc-1.jpg"  alt="" width="400" height="250">
 
Step 2: Select the Source Asset
 
   <img src="https://prontopagos.io/static/img/doc/doc-2.jpg"  alt="" width="400" height="250">
  
Step 3: Enter the Amount of the Origin Asset, in this case we will use XLM
  <img src="https://prontopagos.io/static/img/doc/doc-3.jpg"  alt="" width="400" height="250">
  
  
Step 4: Select the Destination Asset, in this case we will use BRL
  <img src="https://prontopagos.io/static/img/doc/doc-4.jpg"  alt="" width="400" height="250">

  
Step 5: Enter a Memo (Optional) 
  
Step 6: Confirm Payment details
  <img src="https://prontopagos.io/static/img/doc/doc-6.jpg"  alt="" width="400" height="250">

  
 We can see how the API has chosen the most optimized route to achieve the exchange 
