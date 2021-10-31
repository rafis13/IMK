import Overview from "../../components/organisms/Overview";
import Sidebar from "../../components/organisms/Sidebar";

export default function Member() {
    return (
        <div>
             <section className="overview overflow-auto">
        <Sidebar activeMenu="overview"/>
        <Overview/>
    </section>
        </div>
    )
}