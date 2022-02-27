import { Level } from '../../helpers/imc';
import style from './griditem.module.css';
import Up from '../../assets/up.png';
import Down from '../../assets/down.png';

type Props = {
    item: Level
};

export const GridItem = ({item}: Props) => {
    return (
        <div className={style.main} style={{backgroundColor: item.color}}>
            <div className={style.gridIcon}>
                <img src={item.icon === 'up' ? Up : Down} width={30} />
            </div>
            <div className={style.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={style.yourimc}>
                    Seu Imc é de: <strong>{item.yourImc} Kg/m²</strong>
                </div>
            }

            <div className={style.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}

export default GridItem;