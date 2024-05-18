import React from 'react'

const page = async (params) => {
    console.log(params);
    const id = params.params.id
    console.log(id);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}/full`)
    const fullAnime = await response.json()
    console.log(fullAnime);
    
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-64 bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${fullAnime.data.images.webp.image_url})` }}>
                    </div>
                    <div className="w-full md:w-2/3 p-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{fullAnime.data.title}</h2>
                        <p className="text-gray-700 mb-4"><strong>Status:</strong> {fullAnime.data.status}</p>
                        <p className="text-gray-700 mb-4"><strong>Sinopsis:</strong> {fullAnime.data.synopsis}</p>
                        <p className="text-gray-700"><strong>Rating:</strong> {fullAnime.data.rating}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page