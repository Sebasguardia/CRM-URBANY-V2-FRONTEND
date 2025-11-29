import {SlidersHorizontal, Trash2, Heart,} from 'lucide-react';
import Checkbox from "../components/Checkbox/Checkbox";
import DropDown from "../components/DropDown/DropDown";
import BlockCard from "../components/BlockCard/BlockCard";
import BoxSearch from "../components/Search/BoxSearch";
import MapaAvanzado from "../components/GoogleMap/MapaAvanzado";
import Button from "../../../shared/components/UI/Button/Button";

import styles from './Mapa.module.css';

function Mapa() {
  return (
    <div>
        <div className={styles.mainHead}>
            <h1 className={styles.H}>Mapas</h1>
            <Button className={styles.button}>Crear nueva propiedad</Button>
        </div>
        <BoxSearch />
        <Checkbox />
        <div className={styles.dropDown}>        
            <DropDown label="Tipo de operación"/><DropDown label="Tipo de propiedad"/><DropDown label="Precio"/><DropDown label="Ubicación"/>
            <DropDown label="Ambientes"/><DropDown label="Dormitorios"/><DropDown label="Inmobiliarias"/><DropDown label="Comisión"/>
            
            <button className={styles.dropDownButton}> 
              <SlidersHorizontal size={20} />
            </button>
            <button className={styles.dropDownButton}>
              <Heart size={20} />
            </button>
            <button className={styles.dropDownButton}>
              <Trash2 size={20} />
            </button>
        </div>

        <div className={styles.cardsMap}>

          <div className={styles.cards}>
            <BlockCard />
          </div>
          

          <div className={styles.MapaAvanzado}>
            <MapaAvanzado apiKey="AQUI_TU_API_KEY" />
          </div>

        </div>
        
    </div>
  );
}

export default Mapa;