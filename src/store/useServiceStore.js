import {create} from 'zustand';

const useServiceStore =
    create((set) => ({
        services: [], //tempat nyimpen data
        why: [],
        steps: [],

        isLoading: true, //status loading global
        error: null,

        fetchAllData: async () => {
            try {
                const [resServices, resWhy, resSteps] = await Promise.all([
                    fetch ('/data/services.json'),
                    fetch ('/data/why.json'),
                    fetch ('/data/steps.json')
                ]);

                const services = await resServices.json();
                const why = await resWhy.json();
                const steps = await resSteps.json();
               

                set({
                    services,
                    why,
                    steps,
                    isLoading: false,
                });

            } catch (err) {
                console.error("Gagal ambil data:", err);
                set({error: err.message, isLoading: false})
            }
        },
    }));

export default useServiceStore;
