import {MigrationInterface, QueryRunner} from "typeorm";

export class VideosInsert1581198194171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        // await queryRunner.query(`INSERT INTO public.videos
        // (id, created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        // VALUES(uuid_generate_v4(), now(), 'Test', 'Testowy', '04-03-2019', 'pl', 'pl', 3600, 'mov_bbb.mp4', 'mov_bbb.mp4', 'abcd1.jpg');
        // `)

      await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'Porównanie LTS Dla Java – 8 vs 11', 
        '', 
        '04-11-2019', 
        'pl', 
        'pl', 
        3600, 
        'porownanie-lts-dla-java-8-vs-11.mp4', 
        'porownanie-lts-dla-java-8-vs-11.mp4', 
        'porownanie-lts-dla-java-8-vs-11.jpg');
        `)
     await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'Łączymy się z API Spotify i zapisujemy ulubionych artystów do MongoDB', 
        'Tworzymy aplikacje w ramach której łączymy się z API Spotify, wyszukujemy ulubionych artystów, utwory, W następnej kolejności tworzymy kolekcje ulubionych i zapisujemy ją do bazy danych MongoDB – świetna aplikacja, aby sprawdzić możliwości jakie dostarcza Spring Boot!', 
        '25-11-2019', 
        'pl', 
        'pl', 
        3600, 
        'laczymy-sie-z-api-spotify-i-zapisujemy-ulubionych-artystow-do-mongoDB–projekt-spring-boot.mp4', 
        'laczymy-sie-z-api-spotify-i-zapisujemy-ulubionych-artystow-do-mongoDB–projekt-spring-boot.mp4', 
        'laczymy-sie-z-api-spotify-i-zapisujemy-ulubionych-artystow-do-mongoDB–projekt-spring-boot.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'TYPY GENERYCZNE W JAVA - PRAKTYCZNY PRZEWODNIK', 
        'Typy generyczne w języku Java umożliwiają na tworzenie elastycznego kodu. W zależności od przekazywanego parametru/paramentów możemy zmieniać zachowanie obiektu. Tą funkcjonalność wykorzystują listy, które w zależności od przyjmowanego parametru agregują dany typ. W materiale omawiam również metody generyczne i możliwości na wykorzystanie wildcard.', 
        '02-12-2019', 
        'pl', 
        'pl', 
        3600, 
        'typy-generyczne-w-java-praktyczny-przewodnik.mp4', 
        'typy-generyczne-w-java-praktyczny-przewodnik.mp4', 
        'typy-generyczne-w-java-praktyczny-przewodnik.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'DEBUGER NIE TYLKO DO WYCHWYTANIA BŁĘDÓW! JAK Z NIEGO KORZYSTAC?', 
        'Debuger to narzędzie, które służy to analizy kodu źródłowego. Z jego wykorzystaniem znacznie sprawniej znajdziesz błędy. Narzędzie debuger również użyjesz w kontekście tworzenia pracy. Jego funkcjonalności umożliwią bieżący podgląd stanu obiektu.', 
        '16-12-2019', 
        'pl', 
        'pl', 
        3600, 
        'debuger-nie-tylko-do-wychwytania-bledow-jak-z-niego-korzystac.mp4', 
        'debuger-nie-tylko-do-wychwytania-bledow-jak-z-niego-korzystac.mp4', 
        'debuger-nie-tylko-do-wychwytania-bledow-jak-z-niego-korzystac.jpg');
        `)  
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'Z API SPOTIFY ZAPISUJEMY DANE DO MONGODB – CZĘŚĆ II SECURITY', 
        'Tworzymy aplikacje w ramach której łączymy się z API Spotify, wyszukujemy ulubionych artystów, utwory, W następnej kolejności tworzymy kolekcje ulubionych i zapisujemy ją do bazy danych MongoDB – świetna aplikacja, aby sprawdzić możliwości jakie dostarcza Spring Boot! Założenia aplikacji są inspirowane zadaniem jakie trzeba było wykonać przed przystąpieniem do rozmowy o pracę na stanowisko Java Developera do jednej z Sopockich firm IT! W tej części zakończymy pracę nad aplikacją, a dodatkowo wdrożymy zagadnienia związane z bezpieczeństwem wykorzystując Spring Security! ', 
        '23-12-2019', 
        'pl', 
        'pl', 
        3600, 
        'z-api-spotify-zapisujemy-dane-do-mongodb–czesc-ii-security.mp4', 
        'z-api-spotify-zapisujemy-dane-do-mongodb–czesc-ii-security.mp4', 
        'z-api-spotify-zapisujemy-dane-do-mongodb–czesc-ii-security.jpg');
        `) 
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'JAVOWE PODSUMOWANIE ROKU 2019!', 
        'Rok 2019 był owocnym rokiem dla Javy pod względem dostarczonych rozwiązań, frameworków i bibliotek. W trakcie webinaru przyjrzymy się największym zmianą jakie zostały wprowadzone w roku 2019. Sprawimy, które rozwiązania mają największe perspektywy.', 
        '06-01-2020', 
        'pl', 
        'pl', 
        3600, 
        'javowe-podsumowanie-roku-2019.mp4', 
        'javowe-podsumowanie-roku-2019.mp4', 
        'javowe-podsumowanie-roku-2019.jpg');
        `)

    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'Jak sprostać wymaganiom stawianym Java Developerm przez rynek pracy w 2020 roku?', 
        '', 
        '20-01-2020', 
        'pl', 
        'pl', 
        3600, 
        'jak-sprostac-wymaganiom-stawianym-java-developerm-przez-rynek-pracy-w-2020-roku.mp4', 
        'jak-sprostac-wymaganiom-stawianym-java-developerm-przez-rynek-pracy-w-2020-roku.mp4', 
        'jak-sprostac-wymaganiom-stawianym-java-developerm-przez-rynek-pracy-w-2020-roku.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'JAVA 11 OPTIONAL MOZLIWOSCI JAKIE DOSTARCZA TYP OPTIONAL W JAVA I SPRING', 
        'Optional pojawił się w Java 8 i w kolejnych wersjach tego języka był rozbudowywany. Stanowi ono silne narzędzie, które umożliwia na elegancką obsługę żądania na wyjątek otrzymania nulla.', 
        '27-01-2020', 
        'pl', 
        'pl', 
        3600, 
        'java-11-optional-mozliwosci-jakie-dostarcza-typ-optional-w-java-i-spring.mp4', 
        'java-11-optional-mozliwosci-jakie-dostarcza-typ-optional-w-java-i-spring.mp4', 
        'java-11-optional-mozliwosci-jakie-dostarcza-typ-optional-w-java-i-spring.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'JAK ELEGANCKO OBSŁUGIWAĆ BŁĘDY W REST API? - AOP', 
        'REST API powinno również dostarczać możliwość eleganckiej obsługi wyjątków w przypadku kiedy dany zasób nie istnieje, lub pojawi się inny, mniej oczekiwany wyjątek. W materiale pokazuje jak zaimplementować obsługę wyjątków przy wykorzystaniu AOP – co pozwoli jednocześnie odseparować logikę obsługi błędu. ', 
        '03-02-2020', 
        'pl', 
        'pl', 
        3600, 
        'jak-elegancko-obslugiwac-bledy-w-rest-api-aop.mp4', 
        'jak-elegancko-obslugiwac-bledy-w-rest-api-aop.mp4', 
        'jak-elegancko-obslugiwac-bledy-w-rest-api-aop.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'CARGO I WDRAŻANIE APLIKACJI NA DOWOLNY SERWER. JAK URUCHOMIĆ APLIKACJE W SPRING W INTELLIJ COMMUNITY', 
        'Cargo to wrapper, który ułatwi Ci wdrożenie aplikacji na serwer. Przydaje się on również, aby rozwijać aplikacje w Spring Framework, gdy nasze IDE nie wspiera pracy z tym frameworkiem.', 
        '10-02-2020', 
        'pl', 
        'pl', 
        3600, 
        'cargo-i-wdrazanie-aplikacji-na-dowolny-serwer-jak-uruchomic-aplikacje-w-spring-w-intellij-community.mp4', 
        'cargo-i-wdrazanie-aplikacji-na-dowolny-serwer-jak-uruchomic-aplikacje-w-spring-w-intellij-community.mp4', 
        'cargo-i-wdrazanie-aplikacji-na-dowolny-serwer-jak-uruchomic-aplikacje-w-spring-w-intellij-community.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'WDRAŻANIE CERTYFIKATU I KONFIGURACJA HTTPS W SPRING + PODSŁUCH NIEZABEZPIECZONYCH APLIKACJI', 
        'Zobacz jak utworzyć podpis cyfrowy z wykorzystaniem RSA a następnie wdrożyć go w ramach aplikacji napisanej w Spring Boot. Dowiesz się jak skonfigurować HTTPS, które uchroni Cię przed podsłuchem komunikacji. W ramach bonusu pokazuje jak łato jest przechwycić hasła dla każdej aplikacji niezabezpieczonej przez TLS.', 
        '17-02-2020', 
        'pl', 
        'pl', 
        3600, 
        'wdrazanie-certyfikatu-i-konfiguracja-https-w-spring-podsluch-niezabezpieczonych-aplikacji.mp4', 
        'wdrazanie-certyfikatu-i-konfiguracja-https-w-spring-podsluch-niezabezpieczonych-aplikacji.mp4', 
        'wdrazanie-certyfikatu-i-konfiguracja-https-w-spring-podsluch-niezabezpieczonych-aplikacji.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'QUARKUS – FENOMENALNIE PRZYJAZNY FRAMEWORK, KTÓRY POKOCHASZ', 
        'Quarkus to nowy framework dla Java, który charakteryzuje się dużą wydajnością oraz lekkością. Charakteryzują go skuteczny hot swaping i łatwość wdrożenia. Każdy Spring Developer szybko się w nim odnajdzie.', 
        '24-02-2020', 
        'pl', 
        'pl', 
        3600, 
        'quarkus–fenomenalnie-przyjazny-framework-ktory-pokochasz.mp4', 
        'quarkus–fenomenalnie-przyjazny-framework-ktory-pokochasz.mp4', 
        'quarkus–fenomenalnie-przyjazny-framework-ktory-pokochasz.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'Szkolenie Wzorce Projektowe - Observer, Decorator, Factory Method, Singleton, Strategy', 
        'Szkolenie z wzorców projektowych jakie miało miejsce 07/03/2020. Szczegółowo omawiamy wzorce takie jak Observer, Decorator, Factory Method, Singleton i Strategy.', 
        '07-03-2020', 
        'pl', 
        'pl', 
        3600, 
        'szkolenie-wzorce-projektowe-observer-decorator-factory-method-singleton-strategy-demo-kursu.mp4', 
        'szkolenie-wzorce-projektowe-observer-decorator-factory-method-singleton-strategy-demo-kursu.mp4', 
        'szkolenie-wzorce-projektowe-observer-decorator-factory-method-singleton-strategy-demo-kursu.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'GEOLOKALIZACJA ZAGROŻEŃ – ZRÓB TO W SPRINGU!', 
        'Tworzymy aplikację w Spring Boot, która korzysta z map, aby wyświetlać informacje na temat występującego zjawiska w danej lokalizacji. Nie musi być to tylko koronawirus czy inwazja zombie :) A co można zrobić na bazie takiej apki? To już rozjaśni Ci film :) ', 
        '17-03-2020', 
        'pl', 
        'pl', 
        3600, 
        'geolokalizacja-zagrozen–zrob-to-w-springu.mp4', 
        'geolokalizacja-zagrozen–zrob-to-w-springu.mp4', 
        'geolokalizacja-zagrozen–zrob-to-w-springu.jpg');
        `)

    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'SPRING SECURITY - SIMPLE FACTOR AUTHORIZATION [KOLOWIUM]', 
        'Simple Factor Authorization - to mechanizm pozwalający na uwierzytelnianiem użytkownika w ramach usługi z wykorzystaniem loginu i hasła. W materiale pokazuje jak zaimplementować to z Spring Boot. Całość realizuje w oldschoolowym stylu, gdzie LiveStreamy były dedykowane moim studentom', 
        '23-03-2020', 
        'pl', 
        'pl', 
        3600, 
        'spring-security-simple-factor-authorization-kolowium.mp4', 
        'spring-security-simple-factor-authorization-kolowium.mp4', 
        'spring-security-simple-factor-authorization-kolowium.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'ANGULAR CLI DLA PROGRAMISTÓW JAVA - ANGULAR W 45 MIN', 
        'Angular to jeden z topowych frameworków frontendowych. Ze względu na liczne podobieństwa z Java/Spring jest chętnie wykorzystywany przez backendowców. Pisze się w nim lekko i przyjemnie, a każdemu, kto wcześniej pisał w Javie nauka nie zajmie dużo czasu', 
        '31-03-2020', 
        'pl', 
        'pl', 
        3600, 
        'angular-cli-dla-programistow-java-angular-w-45-min.mp4', 
        'angular-cli-dla-programistow-java-angular-w-45-min.mp4', 
        'angular-cli-dla-programistow-java-angular-w-45-min.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'JAVA 14 – SZKOLENIE Z NOWOŚCI DOSTĘPNYCH W NAJNOWSZYM JDK!', 
        'Najnowsze JDK dostarcza aż 16 nowości z których 6 dotyczy zmian w kodzie. W trakcie tego wideo prezentuje zmiany, które najbardziej zainteresują programistów: \n -Nowe możliwości wykorzystanie instanceof \n -Tworzenie paczek instalacyjnych dzięki jpackage \n -Zaawansowane możliwości diagnozowania błędów z wykorzystaniem Helpful NullPointerExceptions \n -Records – uproszczone klasy, które jednak nie są tak zbawienne jak się wydaje \n -Proste bloki Switch \n -Rozbudowane możliwości formatowania wieloliniowych ciągów tekstowych', 
        '13-04-2020', 
        'pl', 
        'pl', 
        3600, 
        'java-14–szkolenie-z-nowosci-dostępnych-w-najnowszym-jdk.mp4', 
        'java-14–szkolenie-z-nowosci-dostępnych-w-najnowszym-jdk.mp4', 
        'java-14–szkolenie-z-nowosci-dostępnych-w-najnowszym-jdk.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'PROGRAMOWANIE FUNKCYJNE W JAVA – SZKOLENIE W PIGUŁCE', 
        'Programowanie funkcyjne to podejście do wytwarzania oprogramowania, gdzie nacisk jest stawiany na operowanie na funkcjach i typach immutable. W tym materiale pokazuje jakie korzyści niesie programowanie funkcyjne i jak dobrze z nim zacząć.', 
        '21-04-2020', 
        'pl', 
        'pl', 
        3600, 
        'programowanie-funkcyjne-w-java–szkolenie-w-pigulce.mp4', 
        'programowanie-funkcyjne-w-java–szkolenie-w-pigulce.mp4', 
        'programowanie-funkcyjne-w-java–szkolenie-w-pigulce.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'ANGULAR + SPRING BOOT + GOOGLE CLOUD PLATFORM! [FRAGMENT SZKOLENIA]', 
        'Fragment szkolenia dotyczącego tworzenia aplikacji, która będzie przyjmowała od użytkownika pliki i zapisywała je w chmurze. Frontend przygotowany w Angularze, Backend w Spring Boot, natomiast całość uruchomimy w ramach Gogole Cloud Platform', 
        '23-04-2020', 
        'pl', 
        'pl', 
        3600, 
        'angular-spring-boot-google-cloud-platform-fragment-szkolenia.mp4', 
        'angular-spring-boot-google-cloud-platform-fragment-szkolenia.mp4', 
        'angular-spring-boot-google-cloud-platform-fragment-szkolenia.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'SPRING WEBFLUX - PROJEKT REAKTYWNEGO API', 
        'Spring WebFlux to jeden z modułów Springa, który umożliwia programowanie reaktywne. WebFlux bazuje na Project Reactor, który dostarcza dwa typu Publisher’ów do asynchronicznego przetwarzania strumieni - Flux i Mono. W tym materiale pokaże Ci jak utworzyć reaktywne API.', 
        '04-04-2020', 
        'pl', 
        'pl', 
        3600, 
        'spring-webflux-projekt-reaktywnego-api.mp4', 
        'spring-webflux-projekt-reaktywnego-api.mp4', 
        'spring-webflux-projekt-reaktywnego-api.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'SWAGGER 2 – BUDOWANIE, WERYFIKOWANIE I DOKUMENTOWANIE API', 
        'Swagger 2 to zestaw narzędzi, które umożliwią budowanie, testowanie i dokumentowanie API. Zobacz jak z wykorzystaniem Swagger-a od podstaw zaimplementować samodokumentujące, łatwe do weryfikacji API.', 
        '12-05-2020', 
        'pl', 
        'pl', 
        3600, 
        'swagger-2–budowanie-weryfikowanie-i-dokumentowanie-api-przyklady.mp4', 
        'swagger-2–budowanie-weryfikowanie-i-dokumentowanie-api-przyklady.mp4', 
        'swagger-2–budowanie-weryfikowanie-i-dokumentowanie-api-przyklady.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'SOAP WEB SERVICES W SPRING BOOT', 
        'Spring Web Services umożliwia Ci na zbudowanie usług w oparciu o protokół SOAP. Pokaże Ci jak zaimplementować usługę webową w Spring Boot w podejściu contract-first development. SOAP, REST czy GraphQL? Porównanie stylów wymiany danych', 
        '18-05-2020', 
        'pl', 
        'pl', 
        3600, 
        'soap-web-services-w-spring-boot.mp4', 
        'soap-web-services-w-spring-boot.mp4', 
        'soap-web-services-w-spring-boot.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'JENKINS PIPLINE - AUTOMATYZACJA BUDOWANIA, TESTOWANIA I WDRAŻANIA APLIKACJI SPRING NA HEROKU', 
        'Jenkins to jeden z najpopularniejszych systemów CI/CD. Pokazuje jak skonfigurować Jenkins pipline (Jenkinsfile) do tego, aby odpowiadał on za automatyczne budowanie aplikacji, testowanie jej, oraz wdrożenie na serwer – w tym przypadku Heroku.', 
        '25-05-2020', 
        'pl', 
        'pl', 
        3600, 
        'jenkins-pipline-automatyzacja-budowania-testowania-i-wdrazania-aplikacji-spring-na-heroku.mp4', 
        'jenkins-pipline-automatyzacja-budowania-testowania-i-wdrazania-aplikacji-spring-na-heroku.mp4', 
        'jenkins-pipline-automatyzacja-budowania-testowania-i-wdrazania-aplikacji-spring-na-heroku.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'SPRING BOOT 2.3 - ŁATWE TWORZENIE OBRAZÓW DOCKEROWYCH Z BUILDPACKS', 
        'Cloud Native Buildpacks to rozwiązanie stworzone przez Pivotal i Heroku, którego zadaniem jest dostarczenie środowiska wykonywalnego dla aplikacji. Z wykorzystaniem Buildpacks możemy w bardzo łatwy sposób budować obrazy zgodne z Docker, a to wszystko zapewnia nam najnowszy Spring Boot 2.3!', 
        '01-06-2020', 
        'pl', 
        'pl', 
        3600, 
        'spring-boot-2_3-latwe-tworzenie-obrazow-dockerowych-z-buildpacks.mp4', 
        'spring-boot-2_3-latwe-tworzenie-obrazow-dockerowych-z-buildpacks.mp4', 
        'spring-boot-2_3-latwe-tworzenie-obrazow-dockerowych-z-buildpacks.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'LIVE RELOAD i HOT SWAP W SPRING BOOT - SPRAWNE WPROWADZANIE ZMIAN W URUCHOMIONEJ APLIKACJI', 
        'Spring DevTools to zestaw narzędzi, które umożliwiają Ci na błyskawiczne wprowadzenie zmian w uruchomionej aplikacji. Są to funkcjonalności znane jako LiveReload i HotSwap – które przybliżam przed przystąpieniem do pokazania ich w praktyce. Dodatkowo zdradzę Ci jak osiągnąć podobny efekt korzystając z tylko z IntelliJ IDEA.', 
        '08-06-2020', 
        'pl', 
        'pl', 
        3600, 
        'live-reload-i-hot-swap-w-spring-boot-sprawne-wprowadzanie-zmian-w-uruchomionej-aplikacji.mp4', 
        'live-reload-i-hot-swap-w-spring-boot-sprawne-wprowadzanie-zmian-w-uruchomionej-aplikacji.mp4', 
        'live-reload-i-hot-swap-w-spring-boot-sprawne-wprowadzanie-zmian-w-uruchomionej-aplikacji.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'DEBUGOWANIE ZDALNE - CO ZROBIĆ KIEDY NIE MOŻESZ DEBUGOWAĆ LOKALNIE?', 
        'Zdalne debugowanie (remote debugging) pozwala na połączenie się z aplikacją, która działa na serwerze i poziomu maszyny lokalnej zweryfikowanie jej działania. Dodatkowo pokazuje jak debugować aplikacje uruchomione w ramach kontenera Docker.', 
        '08-06-2020', 
        'pl', 
        'pl', 
        3600, 
        'debugowanie-zdalne-cozrobic-kiedy-nie-mozesz-debugowac-lokalnie.mp4', 
        'debugowanie-zdalne-cozrobic-kiedy-nie-mozesz-debugowac-lokalnie.mp4', 
        'debugowanie-zdalne-cozrobic-kiedy-nie-mozesz-debugowac-lokalnie.jpg');
        `)
    await queryRunner.query(`INSERT INTO public.videos
        (created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(now(), 
        'DOCKER HUB – REPOZYTORIUM OBRAZÓW | ZOBACZ JAK OPUBLIKOWAĆ WŁASNY OBRAZ', 
        'Docker Hub pozwala na dystrybucje obrazów Docker. W materiale demontuję w jaki sposób stworzyć własny obraz, a następnie opublikować go w publicznym repozytorium by łatwo udostępniać go innym!', 
        '22-06-2020', 
        'pl', 
        'pl', 
        3600, 
        'docker-hub–repozytorium-obrazow-zobacz-jak-opublikowac-wlasny-obraz.mp4', 
        'docker-hub–repozytorium-obrazow-zobacz-jak-opublikowac-wlasny-obraz.mp4', 
        'docker-hub–repozytorium-obrazow-zobacz-jak-opublikowac-wlasny-obraz.jpg');
        `)
    }


    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
