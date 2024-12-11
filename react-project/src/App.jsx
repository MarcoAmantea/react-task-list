const tasks = [
  {
    id: 1,
    title: "Implementare la homepage",
    priority: 1,
    estimatedTime: 120,
    state: "completed"
  },
  {
    id: 2,
    title: "Sviluppare il menu di navigazione",
    priority: 2,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 3,
    title: "Creare il footer del sito",
    priority: 3,
    estimatedTime: 30,
    state: "completed"
  },
  {
    id: 4,
    title: "Ottimizzare le performance",
    priority: 1,
    estimatedTime: 180,
    state: "completed"
  },
  {
    id: 5,
    title: "Scrivere test per i componenti",
    priority: 2,
    estimatedTime: 90,
    state: "completed"
  },
  {
    id: 6,
    title: "Implementare la pagina dei contatti",
    priority: 3,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 7,
    title: "Aggiungere animazioni CSS",
    priority: 2,
    estimatedTime: 30,
    state: "backlog"
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: "in_progress"
  },
  {
    id: 9,
    title: "Aggiornare la documentazione",
    priority: 3,
    estimatedTime: 60,
    state: "backlog"
  },
  {
    id: 10,
    title: "Rifattorizzare il codice CSS",
    priority: 2,
    estimatedTime: 90,
    state: "in_progress"
  }
];


function App() {
  
  const completedFilter = tasks.filter(curTask => curTask.state === "completed");
  const progressFilter = tasks.filter(curTask => curTask.state !== "completed");
  console.log(completedFilter);
  console.log(progressFilter);
  
  function completeList(){
   const completedList = completedFilter.map((curElem) => {
    return (
      <ul>
      <li key={curElem.id}>
      <h5>{curElem.title} <span className="margin color">Stato: {curElem.state}</span></h5>
      <p>priority: {curElem.priority}</p>
      <p>Est. Time:{curElem.estimatedTime}</p>
      </li>
      </ul>
    )
   })
   return completedList
  }
function otherList(){
    const otherList = progressFilter.map((curElem) => {
      return (
        <ul>
        <li key={curElem.id}>
        <h5>{curElem.title} <span className="margin color">Stato: {curElem.state}</span></h5>
        <p>priority: {curElem.priority}</p>
        <p>Est. Time:{curElem.estimatedTime}</p>
        </li>
        </ul>
      )

      })
      return otherList
}
  
  return (
    <>
    <header>
      <h1>Task Manager</h1>
      </header>
      <main>
      <h2 className="margin">Current Task (4)</h2>
      <ul>{otherList()}</ul>
      <hr />
      <h2 className="margin">Completed Task (6)</h2>
      <ul>{completeList()}</ul>
      </main>
      
    </>
  )
}

export default App
