import React from 'react'

function About() {
    return (
        <div className="max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost">
            <div className='grid grid-cols-1 items-start lg:grid-cols-2 gap-4'>
                <div >
                    <img className='w-full h-full' src="./about_us.jpg" alt="" />
                </div>
                <div >
                    <h1 className='text-3xl font-bold mb-2'>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure at minima assumenda maiores veniam cumque ipsam soluta aliquid atque velit earum, porro quos necessitatibus eligendi hic laboriosam pariatur delectus aut et adipisci? Quidem repudiandae numquam suscipit harum non nulla eum quas voluptas? Odio unde velit nesciunt reiciendis vero! Voluptatem blanditiis, iusto obcaecati odit delectus expedita numquam! Nam voluptatibus incidunt cumque error enim atque laudantium natus similique at autem modi qui inventore aperiam, dignissimos mollitia voluptate odit magni veritatis! Accusantium minus, neque dignissimos labore inventore veniam enim officia earum velit voluptates quia quasi perferendis, eaque officiis, ipsum totam fuga atque?</p>
                </div>
            </div>
        </div>
    )
}

export default About