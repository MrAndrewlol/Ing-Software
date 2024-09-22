export async function getThreadPosts() {
    try {
        const response = await fetch(`http://${import.meta.env.VITE_API_HOSTI}:${import.meta.env.VITE_PORTI}/threads/getPosts`, {
            method: 'GET',
            headers: {
                'api-key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Failed to get thread posts');
        }

        return response.json()

    } catch (error) {
        console.error("Error while creating getting posts:", error);
        throw error; 
    }
}

export async function createThreadPost(user_dpi: string, post_text: string, post_Image: string) {

    //Create new chat calling the endpoint /contacts/createChat
    try {
        const data = {
            "dpiUser": user_dpi,
            "postText": post_text,
            "postImage": post_Image
          };

        const response = await fetch(`http://${import.meta.env.VITE_API_HOSTI}:${import.meta.env.VITE_PORTI}/threads/createPost`, {
            method: 'POST',
            headers: {
                'api-key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new post');
        }

        return response.json()

    } catch (error) {
        console.error("Error while creating new thread post:", error);
        throw error; 
    }

}