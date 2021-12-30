interface Navi {
    isLogin:boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function TopNavigation({ isLogin ,setIsLogin }:Navi) {

    console.log(isLogin)

    return (
        <div>
            <img className="image" alt="logo" src={require('./logo.png')} width='120' height='50' />
            <ul>
                <li>login</li>
                <li>mypage</li>
            </ul>
        </div>
    )
    
}

export default TopNavigation