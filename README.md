# burc-api
- Günlük burç yorumları için geliştirilmiş bir modül.

<pre lang="js">
  const burc = require('burc-api');
  /*
    Burçlar: yengec,boga,koc,kova,aslan,balik,basak,terazi,yay,oglak,ikizler.
  */
  const response = await burc.yengec();
  console.log(response); // Yengeç burcu için o günün yorumu.
</pre>
