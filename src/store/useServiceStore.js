import {create} from 'zustand';
import {supabase} from '../lib/supabase';

const useServiceStore =
    create((set) => ({
        services: [], //tempat nyimpen data
        why: [],
        steps: [],

        isLoading: true, //status loading global
        error: null,

        fetchAllData: async () => {
            try {
                set({ isLoading: true }); // Jangan lupa set loading tiap mulai fetch
                const [resServices, resWhy, resSteps] = await Promise.all([
                    supabase.from('services').select('*').order('id', { ascending: true }),
                    supabase.from('why').select('*').order('id', { ascending: true }),
                    supabase.from('stepsc').select('*').order('id', { ascending: true })
                ]);

                // Supabase SDK itu return-nya objek: { data, error }
                // Kita cek satu-satu apakah ada yang gagal
                if (resServices.error) throw resServices.error;
                if (resWhy.error) throw resWhy.error;
                if (resSteps.error) throw resSteps.error;

                // Masukin data ke state (datanya ada di property .data)
                set({
                    services: resServices.data,
                    why: resWhy.data,
                    steps: resSteps.data,
                    isLoading: false,
                });

            } catch (err) {
                console.error("Gagal ambil data:", err);
                set({error: err.message, isLoading: false})
            }
        },
    }));

export default useServiceStore;
