import PocketBase from 'pocketbase';

export async function load() {
    const pb = new PocketBase('http://127.0.0.1:8090');

    try {
        const testimonials = await pb.collection('testimonials').getFullList({
            filter: 'page = "career-centers" && active = true',
            sort: '-created'
        });

        // Return plain objects
        return {
            testimonials: testimonials.map(t => ({
                quote: t.quote,
                author: t.author,
                company: t.company
            }))
        };
    } catch (e) {
        console.error('Error fetching testimonials:', e);
        return { testimonials: [] };
    }
}
