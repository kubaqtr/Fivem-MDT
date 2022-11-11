let cezalar = [
    {isim : "Nedodržení pravidel semaforu (1)", para : 500, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Překročení rychlostního limitu o 5+ (1)", para : 500, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Překročení rychlostního limitu o 10+", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Překročení rychlostního limitu o 20+", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Překročení rychlostního limitu o 30+", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "řízení nelegálního vozidla na silnici (4)", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 4 },
    {isim : "Provozování vozidla bez licence (10)", para : 3000, hapis :0, kamu :0, illegal : false, active : false, tceza : 10 },
    {isim : "Nelegální parkování (1)", para : 500, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Hit And Run (4)", para : 5000, hapis :0, kamu :10, illegal : false, active : false, tceza : 4 },
    {isim : "Nelegálně upravené vozidlo (4)", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 4 },
    {isim : "Bezohledné řízení (1)", para : 5000, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Nelegální pouliční závody", para : 2500, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Podplácení vládního úředníka", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Urážka vládního úředníka", para : 500, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    {isim : "Vyhrožování LEO", para : 2500, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    {isim : "Podvodné zastupování", para : 2500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Prostituce", para : 5000, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Kyberzločin", para : 3000, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    {isim : "Krádež Vládního Vozidla(5)", para : 7500, hapis :50, kamu :0, illegal : false, active : false, tceza : 5 },
    {isim : "Krádež vozidla(3)", para : 7000, hapis :0, kamu :0, illegal : false, active : false, tceza : 3 },
    {isim : "Výtržnictví", para : 3500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Útok", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Útok na vládního úředníka", para : 8000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Odpor zatčení", para : 5000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Podvodné činnosti", para : 4500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Neuposlechnutí výzvy(4)", para : 3000, hapis :0, kamu :0, illegal : false, active : false, tceza : 4 },
    {isim : "Křivá přísaha", para : 7500, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Ve spojení s nelegální organizací(10)", para : 10000, hapis :500, kamu :0, illegal : false, active : false, tceza : 10 },
    {isim : "Neúmyslné zabití", para : 15000, hapis :0, kamu :10, illegal : false, active : false, tceza : 0 },
    {isim : "Únos", para : 10000, hapis :10, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Únos vládního úředníka", para : 15000, hapis :30, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Nelegální sázení", para : 3000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Teroristický čin(10)", para : 100000, hapis :1000, kamu :0, illegal : false, active : false, tceza : 10 },
    {isim : "Povzbuzení nebo pomoc někomu při páchání zločinu", para : 3000, hapis :60, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Ohánět se střelnou zbraní", para : 3500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Získání Molotovu", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Falešná nebo žádná SPZ(2)", para : 2500, hapis :0, kamu :0, illegal : false, active : false, tceza : 2 },
    {isim : "Střelba související s gangem", para : 5000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Braní rukojmí", para : 10000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Pokus o vraždu", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vražda druhého stupně", para : 10000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vražda prvního stupně", para : 15000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Pokus o vraždu vládního úředníka", para : 10000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vražda vládního úředníka druhého stupně", para : 12500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vražda prvního stupně vládního úředníka", para : 17500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Pokus o ozbrojenou loupež", para : 15000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Ozbrojená loupež", para : 20000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Příslušenství k ozbrojené loupeži", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Pokus o loupež", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Loupež", para : 12500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Příslušenství k loupeži", para : 5000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vydávání se za vládního úředníka", para : 3500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Příslušenství k útěku z vězení", para : 5500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Pokus o útěk z vězení", para : 6000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Útěk z vězení", para : 10000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vandalismus", para : 4500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vandalismus vládního majetku", para : 6000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Pokus o Neoprávněný vnik na pozemek", para : 6500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Neoprávněný vnik na pozemek", para : 9000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Žhářství", para : 12500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Obtěžování", para : 2500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Falešné hlášení", para : 2750, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Držení Ukradené Identifikace", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Stalking", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vyhýbání se officerovi", para : 7000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Bezohledné ujíždění", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Řízení pod vlivem", para : 8000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Jízda bez světlometů nebo signálů", para : 1750, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Illegal U-Turn", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Illegal průchod", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Nezastavení na stopce", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Neústupnost Nouzovému Vozidlu", para : 4000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Nedbalé řízení", para : 3500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Týrání zvířat", para : 3000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Poškození vozidla", para : 10000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Praní špinavých peněz", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Velká loupež", para : 9000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vydírání", para : 10000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vloupání", para : 8500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Mučení", para : 15000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Kriminální hrozby", para : 2500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Odchod bez placení", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Manipulace", para : 3500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Neposkytnutí identifikace", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Nezákonné shromáždění", para : 2500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Vyvolání nepokojů", para : 4500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Držení Nelegální Látky", para : 5500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Držení Narkotika", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Držení psychotik", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Držení nelegálního množstvím drog", para : 7500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Neukázněně přecházet ulici", para : 750, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
]
