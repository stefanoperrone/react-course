## React Course

1. **Node**
		
	è una libreria JS che esegue codice JavaScript al di fuori del browser.

2. **npm** (Node Package Manager)
	
	è un gestore dei pacchetti. Tutti moduli installati nell'applicativo vengono definiti nel file ***package.json*** (equivalente del pom)

3. **Progetto**
	
- creazione 
	
			> npx react-create-app <project-name>

- avvio: 
	
			> cd <project-name>
			> npm start

4. **Visual Studio Code**

	installazione ide

5. **React**

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
				
	*Data Binding*: è di tipo *one-way* in quanto la sincronizzazione dei dati si propaga solo dalla sorgente verso l’interfaccia utente. Come in Angular si può realizzare *two-way* utilizzando la libreria Redux.

+  **CSS** 
	
	customizzare lo stile delle componenti in due modi:

	- tag html con la props *style*
	- libreria *styled-component*

			> npm install --save styled-components

	
	### *Esercizio.* 

	creare un applicazione che consenta di:
	- inserire l'anagrafica di una persona (Nome, Cognome, Età)
	- visualizzare la lista degli elementi inseriti

6.	**Routes**

	per inserire la navigazione tra le diverse componenti è necessario definire delle routes
	
			> npm install --save react-router-dom

7. 	**Redux**

	è una libreria JS che fornisce uno stato persistente all'applicativo consentendo di tenere traccia dei cambiamenti dello stato attraverso il dispatch di azioni. 

	- Installazione 
	
			> npm install --save redux
			> npm install --save react-redux
			> npm install --save redux-devtools-extension


	- [Download extension Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

	- *Actions*: sono il payloads delle informazioni che vengono inviata dall applicazione allo store.

	- *Reducer*: specifica come lo stato dell'applicazione cambia in risposta alla azione inviata allo store

