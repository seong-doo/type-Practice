import React, { useState } from 'react';

interface loginProps {
    isModalVisible: boolean;
    setIsModalVisible?: any;
    setIsLogin:any;
}

interface userInfo {
    id: string;
    pw: string;
}

const myId:string = "kimcoding";
const myPw:string = "qweqwe"

const LoginModal: React.FunctionComponent<loginProps> = props => {
    // const navigate = useNavigate();
  const [userInput, setUserInput] = useState<userInfo>({
    id: '',
    pw: '',
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

    const controlInput = (key:string) => (e:any) => {
        setUserInput({ ...userInput, [key]: e.target.value });
      };

      const handleLogin = () => {
        
        if(myId === userInput.id && myPw === userInput.pw){
            setErrorMessage("로그인 성공!")
            props.setIsLogin(true);
            props.setIsModalVisible(false);
        }else{
            setErrorMessage("아이디와 비밀번호를 확인해주세요!")
        }
      }

    return (
        <div>
          { props.isModalVisible
          ? (
            <div className="modalBackground">
                <div className="modalWrapper">
                    <span className="closeIcon" onClick={() => props.setIsModalVisible(false)}>&times;</span>
                    <div >
                        <div>
                            <div>ID</div>
                                <input type="text" id="input_signin_id" value={userInput.id} onChange={controlInput('id')} />
                            </div>
                        <div>
                            <div>Password</div>
                            <input type="password" id="input_signin_password" value={userInput.pw} onChange={controlInput('pw')} />
                        </div>
                        <div>
                            <button className='btn btn-login' type='submit' onClick={handleLogin}>로그인</button>
                        </div>
                        <div className='alert-box'>{errorMessage === '' ? errorMessage : errorMessage}</div>
                    </div>
                </div>
            </div>
          ) : null}
        </div>
    )
}

export default LoginModal