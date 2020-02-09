# myNetflix
Projekt szkoleniowy w ramach inicjatywy devLeaders. Zespół stworzy klona Netflix z użyciem React, Ract Native, NestJS

# Instrukcja uruchomienia projektu
Wymagania  
======
    - plugin vsc:  
        - ms-azuretools.vscode-docker
        - ms-vscode-remote.remote-containers
        - q.typescript-mono-repo-import-helper
        - msjsdiag.debugger-for-chrome
    - globalnie zainstalowane node, lerna, docker

Backend  
======
Uruchomienie
------
![remote-containers](https://microsoft.github.io/vscode-remote-release/images/remote-containers-readme.gif)
- uruchomić remote-containers (zielony kwadrecik lewy dolny róg); Remote-Containers: Reopen Folder in Container
- lerna bootstrap
- utwórz plik .env na podstawie .enc.clone
![start debuger](https://code.visualstudio.com/assets/docs/editor/debugging/debugging_hero.png)
- uruchomić maszyne możesz wybierając Debug Nest Framework i klikając zieloną strzałke lub uruchamiając komende 
```shell
npm run start:devts
```
Migracja danych
------
(migrator wymaga pliku .env)  
- Generowanie migratora na podstawie encji
```shell
npm run typeorm:cli -- migration:generate -n nazwa_migratora
```
- Tworzenie nowego (kolejnego) pustego migratora
```shell
npm run typeorm:cli -- migration:create -n nazwa_migratora
```
- Uruchomienie migratora
```shell
npm run typeorm:cli -- migration:run
```
