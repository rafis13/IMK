import Profile from "./profile"
import MenuItem from "./menuitem"
import Footer from "./footer"

interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'  

}

export default function Sidebar(props: SideBarProps) {
    const {activeMenu}=props;
    return (
        <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile/>
            <div className="menus">
                <MenuItem title="Overview" icon={"icon-menu-overview"} active={activeMenu === 'overview'} href="/"/>
                <MenuItem title="Transaction" icon={"icon-menu-transaction"} active={activeMenu === 'transactions'} href="/member/transactions"/>
                <MenuItem title="Messages" icon={"icon-menu-messages"} href="/member"/ >
                <MenuItem title="Card" icon={"icon-menu-card"} href="/member"/>
                <MenuItem title="Rewards" icon={"icon-menu-rewards"} href="/member"/>
                <MenuItem title="Settings" icon={"icon-menu-settings"} href="/member/edit-profile" active={activeMenu === 'settings'}/>
                <MenuItem title="Log Out" icon={"icon-menu-logout"} href="/sign-in"/>
            </div>
          <Footer/>
        </div>
    </section>
    )
}
