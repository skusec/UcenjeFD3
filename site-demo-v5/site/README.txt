OPG ERA — PILOT WEB v2
======================

Pokretanje:
1. Otvori mapu "site" u Visual Studio Codeu.
2. Pokreni index.html preko Live Server ekstenzije.

Što je novo u v2:
- retuširane i web-optimizirane fotografije pogona
- nova 52-sekundna video prezentacija sastavljena iz svih odabranih snimki
- originalni zvuk iz snimki je uklonjen
- web verzija videa sadrži originalnu neutralnu ambijentalnu glazbenu podlogu izrađenu za ovaj pilot
- uključena je i silent verzija videa u assets/video za kasniju zamjenu soundtracka

Napomena:
Ovo je pilot-prezentacija, nije javna komercijalna ponuda.

V3 AUDIO NAPOMENA
- Glavni prezentacijski video koristi audio segment iz korisnički dostavljene MP3 datoteke,
  od 01:30 nadalje, sinkroniziran na trajanje videa (~52,6 s).
- Originalni zvuk svih snimki je isključen.
- Za javnu/komercijalnu objavu potrebno je zasebno provjeriti/licencirati prava na glazbu.

V3.1 izmjena:
- prezentacijski video se na svim rezolucijama prikazuje u izvornom 16:9 omjeru
- object-fit: contain sprječava cropanje teksta i kadrova u inline prikazu
- isti kompletan video kadar vidljiv je i bez fullscreen-a i u fullscreen-u


V3.2: Fotografije u sekcijama 01 OPREMA i 05 POGON otvaraju se klikom u velikom lightbox prikazu; podržani su ESC, klik izvan slike i tipkovnica.

V3.3 SERVER OPTIMIZACIJA
-----------------------
- Glavni prezentacijski video je web-komprimiran radi studentske server kvote.
- Soundtrack, trajanje i sadržaj videa ostaju sačuvani.
- Silent master nije uključen u server paket kako ne bi nepotrebno trošio kvotu.
- Za produkcijski/master arhiv čuvati prethodnu lokalnu verziju projekta.

V3.4: presentation video rebuilt directly from original annotated Einaudi master and recompressed for server upload. Intro/outro text preserved.


v3.6 STATIC ORIGINAL STRIP
- Vraćen izvorni vizualni stil trake (CAPS, tracking, bold, olive točke).
- Uklonjeno je kretanje/animation: traka je potpuno statična.
- Na desktopu je centrirana u jednom redu; na uskim mobilnim ekranima uredno se prelama bez pomicanja.
