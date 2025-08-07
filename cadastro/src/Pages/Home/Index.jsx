import styles from "./style.module.scss"
function Index() {
  const users = [
    {
      id: "fwer23rweq",
      name: "richard",
      age: 18,
      email: "richardgamespla@gmail.com"
    },
    {
      id: "31221ewe",
      name: "lucas",
      age: 20,
      email: "lucas@gmail.com"
    }
  ]
  return (
    <div className={styles.container}>
      <form action="" method="post">
      <h1>Cadastro de Usuarios</h1>
        <input type="text" name="" id="" placeholder="Nome"/>
        <input type="number" name="" id="" placeholder="Idade"/>
        <input type="email" name="" id="" placeholder="Email"/>
        <input type="button" value="Cadastre" />
      </form>
        {users.map((item) => (
      <div key={item.id} className={styles.card}>
        <div>
          <p>Nome: {item.name}</p>
          <p>Idade: {item.age}</p>
          <p>Email: {item.email}</p>
        </div>
          <button className={styles.lixeira}>
          <i class="fa-solid fa-trash"></i>
          </button>
      </div>
        ))}
    </div>
  )
}

export default Index
