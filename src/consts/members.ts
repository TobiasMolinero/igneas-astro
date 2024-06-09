import { type Member} from "../types/member";
import foto_jessica from '/public/images/foto-jesi.webp';
import foto_victoria from '/public/images/foto-viki.webp';
import foto_majo from '/public/images/foto-majo.webp';

export const MIEMBROS: Member[] = [
    {
        id: 'jesi',
        name: 'Jessica Gomez Leccese',
        desc: 'Lic. en Artes Plásticas. Especialista en esculturas. Diplomada en liderazgo politico. Miembro fundador de IGNEAS.',
        position: 'Presidenta de IGNEAS',
        image: foto_jessica.src,
        alt: 'Imagen de Jessica, miembro fundador y Presidente de la Cooperativa'
    },
    {
        id: 'viki',
        name: 'Maria Victoria Herrero Jaime',
        desc: 'Lic. en Artes Plásticas especializada en grabado y posgrado en Arte Digital. Miembro fundador de IGNEAS.',
        position: 'Vicepresidenta de IGNEAS',
        image: foto_victoria.src,
        alt: 'Imagen de Victoria, miembro fundador y Vicepresidenta de la Cooperativa'
    },
    {
        id: 'majo',
        name: 'María José Mazzocato',
        desc: 'Lic. en Relaciones Internacionales. Especialista en terrorismo, defensa y estrategia militar. Docente Academica. Miembro fundador de IGNEAS.',
        position: 'Secretaria General',
        image: foto_majo.src,
        alt: 'Imagen de Maria Jose, miembro fundador y Secretaria General de la Cooperativa'
    }
]