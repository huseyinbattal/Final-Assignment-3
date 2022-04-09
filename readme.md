**SOFTINNOVAS FULLSTACK WEB DEVELOPER BOOTCAMP**

**BİTİRME PROJE ÖDEVİ – 3**

Bankadan para çekmeye yönelik bir algoritma problemi karşınızda. (Hackerrank’tenn alınmıştır)

Belli sayıda müşteri bankamatik kuyruğunda beklemektedir. Bu müşteriler belli bir limite ve kurala göre tüm paralarını çekeceklerdir. Nihai olarak getFinalOrder() fonksiyonumuz müşterilerin para çekme kuyruğundan ayrılış sırasını sonuç olarak verecektir.

**Başlangıç koşulu** olarak getFinalOrder() fonksiyonu 2 parametre almaktadır.

·         k => bir seferlik para çekme limiti (number),

·         amounts => müşterilerin ilk sıralamasına göre oluşturulan hesap bakiyeleri (array)

o   Örneğin amounts=[3, 5, 1] olursa; sıradaki 1.nci müşterinin 3, 2.nci müşterinin 5, 3.ncü müşterinin 1 birim parası bulunmaktadır.

**Kural :** Her müşterinin tek seferde çekebileceği maksimum tutar k rakamı ile tanımlanmaktadır. Müşteri hesabında k veya daha az parası varsa, parasını çekip kuyruktan çıkacaktır. k’dan daha fazla parası varsa k kadar parasını çekecek ve sıranın sonuna geçecektir.

Yukarıdaki örneğe göre k=2 olursa ilk müşteri 2 birim para çekip sıranın sonuna geçecek ve hesabında 1 birim parası kalacaktır. İkinci müşteri de 2 birim para çekip sıranın sonuna geçecek ve 3 birim parası kalacaktır. Üçüncü müşteri 1 birim parasını çekip sıradan çıkacaktır. Sıradan ilk çıkan müşteri 3.ncü müşteridir. Daha sonra ilk müşteri kalan 1 birim parasını çeker ve sıradan ayrılır. Sıradan ikinci olarak ayrılan müşteri birinci müşteridir. Daha sonra ikinci müşteri 2 tur sonunda parasının tamamını çeker ve sıradan sonuncu olarak ayrılır. getFinalOrder() fonksiyonu [3,1,2] sonucunu verir.

Şu şekilde de yorumlanabilir, ilk anda sırada [“a”, “b” , “c”] müşterileri varsa, sıradan ayrılmaya göre sonuç [“c”, “a”, “b”] olacaktır. (Burası problemin anlaşılması için yazıldı. Sonuç bir üst paragraftaki gibi sıra numarasına göre olacaktır, isim sırası istenmiyor.)

*Not: Başlangıçta sıra numaralı bir array veya isimlerin olduğu bir müşteri array'i yok, fonksiyonun 2.nci parametresine istinaden hayali bir array'e göre sonuç çıkacak.*

**# Beklentiler**

·         Çalışır bir .js dosyasında tek bir fonksiyon oluşturulması yeterlidir. React yapısına gerek yok, bir .html dosyası ve ona bağlı .js dosyası yeterli.

·         Test verileri manuel olarak atanabilir, DOM’dan almaya gerek yok.

·         Farklı farklı olasılıklara göre test ediniz.

·         Github’a yükleyip git linkini paylaşınız. Veya sadece Fonksiyonu buradan paylaşınız.

Başarılar…
