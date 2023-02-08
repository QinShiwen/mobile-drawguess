import { Toast } from 'antd-mobile'
import styled from 'styled-components';
import WarnIcon from "../../assets/imgs/alert.png"

interface ToastProps {
    icon: string;
    title: string;
}

const iconType = {
    warn: WarnIcon,
}

export const HintToast = ({ icon, title }: ToastProps) => {
    Toast.show({
        content: (
            <ToastBox>
                {icon ? (<img src={WarnIcon} width = {20}/>) : ("")}
                <div>{title}</div>
            </ToastBox>
        ),
        position: 'top',
    })
}

const ToastBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 32px;
height: 48px;
font-family: Jua;
border-radius: 5px;
`