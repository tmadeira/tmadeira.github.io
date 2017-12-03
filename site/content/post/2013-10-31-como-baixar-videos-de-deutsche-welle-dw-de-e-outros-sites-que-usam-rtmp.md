---
title: Como baixar vídeos de Deutsche Welle (dw.de) e outros sites que usam RTMP
type: post
date: 2013-11-01T02:49:51+00:00
url: /2013/10/como-baixar-videos-de-deutsche-welle-dw-de-e-outros-sites-que-usam-rtmp/
categories:
  - Dicas

---
**RTMP** ([Real Time Messaging Protocol][1]) é um protocolo desenvolvido pela Macromedia para fazer streaming de áudio e vídeo de um servidor para um Flash player.

Vou mostrar uma forma genérica para baixar vídeos de sites que usam RTMP usando como exemplo um vídeo do [Deutsche Welle][2]. Escolhi esse site porque ele não é suportado pela extensão [Video DownloadHelper][3] do Firefox. Porém, a dica funciona para vários outros sites que também usam esse protocolo.

* * *

Para começar, você vai precisar instalar dois programas livres: **Wireshark** e **RTMPDump**.

O primeiro serve para analisar os pacotes que estão passando na rede (quem manda para quem, que protocolo está sendo usado, qual seu conteúdo etc). O segundo baixa vídeos que estão disponíveis através do protocolo RTMP.

Para instalá-los no Ubuntu, basta escrever num terminal: `sudo apt-get install wireshark rtmpdump`. Em outras distribuições de Linux, use seu gerenciador de pacotes preferido.

No Windows ou outras plataformas onde é mais difícil instalar programas, você pode baixar esses programas (e seus códigos) em [wireshark.org][4] e [rtmpdump.mplayerhq.hu][5].

Antes que reclamem nos comentários, há muitos programas mais simples que poderiam substituir o Wireshark nessa dica, mas decidi usar o Wireshark porque ele permite muitas outras coisas que podem ser úteis no futuro. Com efeito, usando o Wireshark é fácil encontrar o endereço de vídeos de sites que usam Flash mas não usam RTMP, como por exemplo Globo.com (que usa HTTP mesmo). Além disso, o Wireshark pode ajudar você a capturar e analisar pacotes que estão passando pelo ar mas teoricamente não deveriam ser lidos por você numa rede WiFi. Porém, isso já foge do escopo deste post.

* * *

O vídeo que usarei como exemplo é o que aparece quando você clica na foto do Brasil (Organize a sua indignação) na reportagem [Alle Macht dem Volk?][6] Clique nessa imagem e deve aparecer uma tela como esta:

[<img src="https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/reportagem-650x365.jpg?resize=604%2C339" alt="reportagem" class="aligncenter size-large wp-image-2871" srcset="https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/reportagem.jpg?resize=650%2C365&ssl=1 650w, https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/reportagem.jpg?resize=300%2C168&ssl=1 300w, https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/reportagem.jpg?w=941&ssl=1 941w" sizes="(max-width: 604px) 100vw, 604px" data-recalc-dims="1" />][7]

Neste momento, espere um pouco antes de clicar no botão _Play_ para começar a tocar o vídeo. Primeiro abra o Wireshark e comece a capturar na interface que você usa para acessar a Internet (ou escute em todas caso não saiba qual escolher). Para não ter que ficar vendo muitas coisas desnecessárias, filtre apenas mensagens do protocolo RTMP: escreva no campo _Filter_ o valor _rtmpt_ (não é erro de digitação, tem um “t” no final mesmo) e pressione _Enter_.

Agora você pode começar a tocar o vídeo. Porém, não é de seu interesse assistí-lo no navegador e você não quer que o Wireshark fique muito sobrecarregado capturando todos os milhares de pacotes que passam na rede para transferir um vídeo desse tamanho. Portanto, inicie o vídeo e, assim que ele começar a tocar, feche a aba para parar de baixá-lo.

Se tudo correu bem, você pode parar a captura no Wireshark (clicando no ícone vermelho com um X lá no seu menu). Na sua tela, você deve estar vendo alguns pacotes RTMP filtrados:

[<img src="https://i2.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/wireshark-650x388.jpg?resize=604%2C361" alt="wireshark" class="aligncenter size-large wp-image-2874" srcset="https://i2.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/wireshark.jpg?resize=650%2C388&ssl=1 650w, https://i2.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/wireshark.jpg?resize=300%2C180&ssl=1 300w, https://i2.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/wireshark.jpg?w=1083&ssl=1 1083w" sizes="(max-width: 604px) 100vw, 604px" data-recalc-dims="1" />][8]

Lendo o conteúdo desses pacotes, você consegue descobrir qual é o endereço do vídeo no protocolo RTMP e então usar o RTMPDump para baixá-lo. Esse endereço está dividido em duas mensagens.

Na mensagem _connect_ enviada pelo cliente ao servidor para iniciar o _handshake_, você encontra o parâmetro **tcUrl**, que neste caso aponta para `rtmp://tv-od.dw.de/flash/`:

[<img src="https://i0.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/tcurl-650x346.jpg?resize=604%2C322" alt="tcurl" class="aligncenter size-large wp-image-2878" srcset="https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/tcurl.jpg?resize=650%2C346&ssl=1 650w, https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/tcurl.jpg?resize=300%2C160&ssl=1 300w, https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/tcurl.jpg?w=1076&ssl=1 1076w" sizes="(max-width: 604px) 100vw, 604px" data-recalc-dims="1" />][9]

Um pouco abaixo, na mensagem _play_, você encontra o resto do endereço (neste caso, `vdt_de/2013/bdeu131028_004_rioprotest_01i_sd_avc.mp4`):

[<img src="https://i0.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/play-650x364.jpg?resize=604%2C338" alt="play" class="aligncenter size-large wp-image-2879" srcset="https://i0.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/play.jpg?resize=650%2C364&ssl=1 650w, https://i0.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/play.jpg?resize=300%2C168&ssl=1 300w, https://i0.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/play.jpg?w=1078&ssl=1 1078w" sizes="(max-width: 604px) 100vw, 604px" data-recalc-dims="1" />][10]

Juntando as duas partes, temos o endereço completo: `rtmp://tv-od.dw.de/flash/vdt_de/2013/bdeu131028_004_rioprotest_01i_sd_avc.mp4`. Com ele, é hora de usarmos o RTMPDump. Essa parte é trivial. Basta abrir um terminal e digitar `rtmpdump` com os parâmetros `-r` (endereço) e `-o` (arquivo de saída). O resultado é este:

```
$ rtmpdump -r rtmp://tv-od.dw.de/flash/vdt_de/2013/bdeu131028_004_rioprotest_01i_sd_avc.mp4 -o a.mp4
RTMPDump v2.4
(c) 2010 Andrej Stepanchuk, Howard Chu, The Flvstreamer Team; license: GPL
Connecting ...
INFO: Connected...
Starting download at: 0.000 kB
INFO: Metadata:
INFO:   duration              242.58
INFO:   moovPosition          28.00
INFO:   width                 1280.00
INFO:   height                720.00
INFO:   videocodecid          avc1
INFO:   audiocodecid          mp4a
INFO:   avcprofile            66.00
INFO:   avclevel              31.00
INFO:   aacaot                2.00
INFO:   videoframerate        25.00
INFO:   audiosamplerate       48000.00
INFO:   audiochannels         2.00
INFO: trackinfo:
INFO:   length                6064000.00
INFO:   timescale             25000.00
INFO:   language              eng
INFO: sampledescription:
INFO:   sampletype            avc1
INFO:   length                11643904.00
INFO:   timescale             48000.00
INFO:   language              eng
INFO: sampledescription:
INFO:   sampletype            mp4a
46239.482 kB / 242.56 sec (99.9%)
Download complete
$
```

O vídeo usado no exemplo, para quem se interessar e entender alemão, foi parar no YouTube e agora pode ser incorporado em qualquer site:

 [1]: https://en.wikipedia.org/wiki/Real_Time_Messaging_Protocol
 [2]: http://dw.de/
 [3]: https://addons.mozilla.org/en-US/firefox/addon/video-downloadhelper/
 [4]: https://www.wireshark.org/
 [5]: http://rtmpdump.mplayerhq.hu/
 [6]: http://www.dw.de/themen/alle-macht-dem-volk/s-32349
 [7]: https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/reportagem.jpg
 [8]: https://i2.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/wireshark.jpg
 [9]: https://i1.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/tcurl.jpg
 [10]: https://i0.wp.com/tiagomadeira.com/wp-content/uploads/2013/10/play.jpg
