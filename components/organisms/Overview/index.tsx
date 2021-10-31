import Categorie from './categorie'
import TableRow from './tablerow'

export default function Overview() {
    return (
        <main className="main-wrapper">
        <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
            <div className="top-up-categories mb-30">
                <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                <div className="main-content">
                    <div className="row">
                      <Categorie nominal={18000500} icon="icon-desktop">Game <br/>Desktop</Categorie>
                      <Categorie nominal={8445000} icon="icon-mobile" >Game <br/>Mobile</Categorie>
                      <Categorie nominal={5000000} icon="icon-desktop">Others <br/>Categories</Categorie>
                    </div>
                </div>
            </div>
            <div className="latest-transaction">
                <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                <div className="main-content main-content-table overflow-auto">
                    <table className="table table-borderless">
                        <thead>
                            <tr className="color-palette-1">
                                <th className="text-start" scope="col">Game</th>
                                <th scope="col">Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow image="overview-1" title="Mobile Legend" categorie="Mobile" item={200} price={290000} status="Pending"/>
                            <TableRow image="overview-2" title="Call Of Duty:Modern" categorie="Desktop" item={550} price={740000} status="Success"/>
                            <TableRow image="overview-3" title="Clash of Clan" categorie="Mobile" item={100} price={12000} status="Failed"/>
                            <TableRow image="overview-4" title="The Royal Game" categorie="Mobile" item={225} price={20000} status="Pending"/>
                            
                    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
    )
}
