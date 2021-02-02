# 📡 Günlük burç yorumları için geliştirilmiş basit bir modül.

Basit ama kullanışlı bir modül size kolaylık sağlayabilir.<br>
Sorunuz/Sıkıntınız olursa GitHub profilimdeki bağlantılardan bana ulaşabilirsiniz.

# Kullanım

<pre lang="js">
  const burc = require('burc-api');
  /*
    Burçlar: yengec,boga,koc,kova,aslan,balik,basak,terazi,yay,oglak,ikizler.
  */
  const response = await burc.yengec();
  console.log(response); // Yengeç burcu için o günün yorumu.
</pre>
