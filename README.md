# Proiect Cloud RADU DANIELA - SIMPRE - AN 1


Aplicatia reprezinta doua exemple de implementare a utilizarii de API-uri externe folosind fetch-ul. 

Ca si prim API-uri am folosit https://jsonplaceholder.typicode.com care dispune de mai multe rute de navigare
din care printr-un GET putem aduce in aplicatie useri, url-uri de potografii, postari ale site-uri,
dar si prin creearea unui POST putem trimite si inregistra o noua postare.

Al doilea API folosit este https://sv443.net/jokeapi/v2/joke/Any, in care prin apasarea butonului "Get a random joke" se apeleaza un GET care aduce in aplicatie o gluma. 

Aplicatia este formata din trei butoane si un form
1.Butonul 'Get Photo Links' care apeleaza un GET catre https://jsonplaceholder.typicode.com/photos si aduce in pagina toate url-urile de poze existente in jsonplaceholder
2.Butonul 'Get users from jsonplaceholder' care apeleaza un GET catre https://jsonplaceholder.typicode.com/users si aduce in pagina toti userii existenti in jsonplaceholder
3.Butonul 'Get a random joke' care apeleaza un GET catre https://sv443.net/jokeapi/v2/joke/Any si la fiecare apasare de buton aduce in pagina o noua gluma
4.Formularul care contine doua inpururi, unul pentru title si celalalt pentru body si un buton 'Submit a post in jsonplaceholder' care trimite catre API o noua inregistrare care se poate vedea in consola
(se apasa F12 in aplicatie pentru a se deschide consola inainte de a se apasa buronul, iar dupa fiecare click se afiseaza in consola postarea trimisa)

Exemplu de metoda HTTP:
  fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ title: title, body: body })
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
        
        