import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
  return(
    <>
      <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
      <div className="dsmeta-form-control-container">
    <input className="dsmet-form-control" type="text"/>
      </div>
     <div className="dsmeta-form-control-container">
       <input className="dsmet-form-control" type="text"/>
        </div>
       </div>

        <div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show992">Id</th>
                        <th className="show576">Data</th>
                        <th>Vendedor</th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="show992">#123</td>
                        <td className="show576">05/09/2022</td>
                        <td>Klara</td>
                        <td className="show992">2</td>
                        <td className="show992">3</td>
                        <td>R$ 52344.00</td>
                        <td>
                            <div className="dsmeta-read-btn-container">
                                <NotificationButton />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#123</td>
                        <td className="show576">05/09/2022</td>
                        <td>Klara</td>
                        <td className="show992">2</td>
                        <td className="show992">3</td>
                        <td>R$ 52344.00</td>
                        <td>
                            <div className="dsmeta-read-btn-container">
                            <NotificationButton />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#123</td>
                        <td className="show576">05/09/2022</td>
                        <td>Klara</td>
                        <td className="show992">2</td>
                        <td className="show992">3</td>
                        <td>R$ 52344.00</td>
                        <td>
                            <div className="dsmeta-read-btn-container">
                            <NotificationButton />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>

</>
  )
}

export default SalesCard