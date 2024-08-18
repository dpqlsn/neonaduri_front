import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery'; 
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    const isSmallScreen = useMediaQuery('(max-width:100%)');
    const isMediumScreen = useMediaQuery('(max-height:100%)');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                setIsSuccessModalOpen(true);
            } else {
                setIsErrorModalOpen(true);
            }
        } catch (error) {
            setIsErrorModalOpen(true);
        }
    };

    const updateButtonState = () => {
        return email.trim() !== '' && password.trim() !== '';
    };

    return (
        <div className={`box ${isSmallScreen ? 'small-screen' : 'width:64%'} ${isMediumScreen ? 'medium-screen' : 'height:70%'}`}>
            <div class="container">
            <div className="space">
                <div className="log">로그인</div>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="detail">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="이메일"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="detail">
                        <input
                            type="password"
                            id="pw"
                            name="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        id="open"
                        className={updateButtonState() ? 'active' : ''}
                        disabled={!updateButtonState()}
                    >
                        로그인
                    </button>
                </form>
                {isSuccessModalOpen && (
                    <div className={`modal-wrapper open`}>
                        <div className="modal">
                            <div className="modal-title">로그인되었습니다!</div>
                            <div className="close-wrapper">
                                <button
                                    className="close-button"
                                    onClick={() => setIsSuccessModalOpen(false)}
                                >
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {isErrorModalOpen && (
                    <div className={`modal-wrapper open`}>
                        <div className="modal">
                            <div className="modal-title">회원정보가 일치하지 않습니다</div>
                            <div className="close-wrapper">
                                <button
                                    className="close-button"
                                    onClick={() => setIsErrorModalOpen(false)}
                                >
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="small">
                    처음 이용하시나요?&emsp;
                    <input
                        type="button"
                        value="회원가입하기"
                        onClick={() => window.open('./my-app/src/SignUpPage/SignUpPage.jsx')}
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default LoginPage;
