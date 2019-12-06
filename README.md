## React Course

1. [**Node.js**](https://nodejs.org/it/)
		
	è una libreria JS che consente di eseguire codice JavaScript al di fuori del browser.

2. [**npm**](https://www.npmjs.com/) (Node Package Manager)
	
	è un gestore dei pacchetti. Tutti moduli installati nell'applicativo vengono definiti nel file ***package.json***. 
	L'installazione di **Node** ci fornirà la possibilità di usare il software npm.
	La sintassi per l'installazione di una dipendenza è:

			> npm install --save <dependency-name>

3. **Progetto**

	Per la creazione di un progetto abbiamo a disposizione _react-create-app_ che genererà la struttura del progetto con le dependencies di base
	
	
			> npx create-react-app <project-name>

  	una volta creato il progetto è sufficiente eseguire i seguenti comandi per avviarlo
	
			> cd <project-name>
			> npm start

4. **Installazione IDE**

	consiglio di utilizzare [Visual Studio Code](https://code.visualstudio.com/download)

5. [**React**](https://reactjs.org/)

+  ***Introduzione***

	libreria JS che consente di costruire UI. Usata per generare *single page application*
	è una applicazione web the interagisce con l'utente e dinamicamente riscrive la pagina corrente invece che ricaricare delle nuove intere pagine da un server.
	
+ ***Virtual DOM***
    		
     rispetto ad Angular viene creata una copia del DOM e viene applicato un algoritmo di diff con l'originale che consente di re-renderizzare solo la parte coinvolta da un evento che ne modifica il DOM 
    	

+ ***JSX***
   		
   	JS eXtension consente di unire il linguaggio di markup con la logica nello stesso file. Le espressioni JSX diventatno funzioni JavaScript che producono oggetti JavaScript. è passibile passare attributi _*attr="value"*_

+ ***Componenti***

   	parti del UI che compongono il DOM che sono indipendenti, riutilizzabili ed atomiche.
		
	due modi equivalenti per definirle:
		
	- funzione JS
   	- classe (contiene funz. aggiuntive)

+ **Props**

	le proprietà sono in sola lettura, e sono considerate come delle funzioni che possono essere:
 
 	- *“pure”* perché non provano a cambiare i propri dati in input:

   					function somma(a, b) {
   						return a + b;
				    }

	- *"impure"* in quanto alterano gli input:

					function preleva(conto, ammontare) {
						conto.totale -= ammontare;
					}

	Per effettuare un controllo sul tipo delle proprietà passate ad una componente usare la libreria *prop-types*

			> npm install --save prop-types
				
	### *Data Binding*:
	 è di tipo *one-way* in quanto la sincronizzazione dei dati si propaga solo dalla sorgente verso l’interfaccia utente. Come in Angular si può realizzare *two-way* utilizzando la libreria Redux.

	 ### *Callback Function*:

	é la possibilità di passare funzioni come variabili e di eseguirle all'interno di altre funzioni.

+  **CSS** 
	
	customizzare lo stile delle componenti in due modi:

	- tag html con la props *style*
	- libreria [*styled-component*](https://www.styled-components.com/)

			> npm install --save styled-components

6.	[**Routes**](https://reacttraining.com/react-router/web/guides/quick-start)

	per inserire la navigazione tra le diverse componenti è necessario definire delle routes
	
			> npm install --save react-router-dom

7. 	[**Redux**](https://redux.js.org/)

	è una libreria JS che fornisce uno stato persistente all'applicativo consentendo di tenere traccia dei cambiamenti dello stato attraverso il dispatch di azioni. 

  	installazione delle dependency necessarie:
	
			> npm install --save redux
			> npm install --save react-redux
			> npm install --save redux-devtools-extension

  	Per poter osservare le mutazioni dello stato all'interno dell'applicato è necessario:
	- installazione estensione Chrome [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

	- configurazione all'interno del progetto necessaria per effettuare il collegamento con l'estensione del browser. Consultando il repository di github [Redux DevToolsExtension](https://github.com/zalmoxisus/redux-devtools-extension)

	Concetti chiave Redux:

	- *Actions*: sono il payloads delle informazioni che vengono inviata dall applicazione allo store.

	- *Reducer*: specifica come lo stato dell'applicazione cambia in risposta alla azione inviata allo store

