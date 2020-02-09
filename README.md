# myNetflix
Projekt szkoleniowy w ramach inicjatywy devLeaders. Zespół stworzy klona Netflix z użyciem React, Ract Native, NestJS

# Instrukcja uruchomienia projektu
## Wymagania  
    - plugin vsc:  
        - ms-azuretools.vscode-docker
        - ms-vscode-remote.remote-containers
        - q.typescript-mono-repo-import-helper
        - msjsdiag.debugger-for-chrome
    - globalnie zainstalowane node, lerna, docker

## Backend  
    1. Uruchomienie
        ![remote-containers](https://microsoft.github.io/vscode-remote-release/images/remote-containers-readme.gif)
        - uruchomić remote-containers (zielony kwadrecik lewy dolny róg); Remote-Containers: Reopen Folder in Container
        - lerna bootstrap
        ![start debuger](https://code.visualstudio.com/assets/docs/editor/debugging/debugging_hero.png)
        - uruchomić maszyne możesz wybierając Debug Nest Framework i klikając zieloną strzałke lub uruchamiając komende 
        ```shell
        npm run start:devts
        ```
    
2. 
    -zanim chcemy uruchomić backend, musimy w katalogu backend utworzyć plik .env
    - w pliku tworzymy zmienną PORT=3300 
    - jeżeli chcemy przetestować sam backend, uruchamiamy komende:
    - yarn run build
    - yarn run start1 

 Z powoduje to uruchomienie Reacta na porcie 3000 i Nest.js na porcie 3300 
