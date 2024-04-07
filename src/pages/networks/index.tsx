import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

import { db } from "../../services/firebaseconnection";
import { doc, setDoc, getDoc } from "firebase/firestore";

export function Networks() {
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');

    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, 'social', 'link');
            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined) {
                    setFacebook(snapshot.data()?.facebook);
                    setInstagram(snapshot.data()?.instagram);
                    setYoutube(snapshot.data()?.youtube);
                }
            })
        }

        loadLinks();
    }, [])

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        setDoc(doc(db, 'social', 'link'), {
            facebook,
            instagram,
            youtube
        })
        .then(() => {
            alert('Links registrados com sucesso');
        })
        .catch((error) => {
            alert('Erro ao registrar links' + error);
        })
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
                <label className="text-white font-mediummt-2 mb-2">Link do Facebook</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do facebook"
                    value={facebook}
                    onChange={e => setFacebook(e.target.value)}
                />

                <label className="text-white font-mediummt-2 mb-2">Link do Instagram</label>
                <Input
                    type="url"
                    placeholder="Digite a url do instagram"
                    value={instagram}
                    onChange={e => setInstagram(e.target.value)}
                />

                <label className="text-white font-mediummt-2 mb-2">Link do Youtube</label>
                <Input
                    type="url"
                    placeholder="Digite a url do youtube"
                    value={youtube}
                    onChange={e => setYoutube(e.target.value)}
                />

                <button type="submit" className="bg-blue-600 mt-4 rounded-md h-9 font-medium flex items-center justify-center text-white hover:bg-blue-700 transition-colors">Salvar links</button>
            </form>
        </div>
    )
}