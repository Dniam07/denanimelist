import Link from 'next/link';
import React from 'react';

const Card = async ({
    api
}) => {

    console.log(api)

    return (
        <>
            {api.data.map((topAnime) => {
                return (
                    <Link href={`/${topAnime.mal_id}`}>
                        <div className="w-full sm:w-1/2 md:w-64 md:h-96 rounded overflow-hidden shadow-lg bg-white flex flex-col hover:scale-105 transition ease-in-out duration-300">
                            <div
                                className="w-full h-48 md:h-1/2 bg-cover bg-center"
                                style={{ backgroundImage: `url(${topAnime.images.jpg.image_url})` }}
                            ></div>
                            <div className="px-6 py-4 flex-1 flex flex-col justify-between items-center">
                                <div className="font-bold text-lg md:text-xl mb-2 text-center">{topAnime.title}</div>
                                <p className="text-gray-700 text-base text-center">
                                    {topAnime.status}
                                </p>
                            </div>
                        </div>

                    </Link>

                )
            })}

        </>
    );
};

export default Card;
