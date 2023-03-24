import Item from "./item";

const IGStory:React.FC =() =>{


    const data = [
        { "id": 1, "name": "Andy", "avatar": "/images/avatars/a1.png" },
        { "id": 2, "name": "Andy2", "avatar": "/images/avatars/a2.png" },
        { "id": 3, "name": "Andy3", "avatar": "/images/avatars/a3.png" },
        { "id": 4, "name": "Andy4", "avatar": "/images/avatars/a4.png" },
        { "id": 5, "name": "Andy5", "avatar": "/images/avatars/a5.png" },
        { "id": 6, "name": "Andy6", "avatar": "/images/avatars/a6.png" },
        { "id": 7, "name": "Andy7", "avatar": "/images/avatars/a7.png" },
        { "id": 8, "name": "Andy8", "avatar": "/images/avatars/a8.png" },
        { "id": 9, "name": "Andy9", "avatar": "/images/avatars/a9.png" },
        { "id": 10, "name": "Andy10", "avatar": "/images/avatars/a10.png" }
      ]


    return(<>
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
        {/* <Item name="person_a1" avatar={"/images/avatars/a1.png"}/> */}
        {
            data?.map((item)=>{
                const {id ,name, avatar} =item;
                return <Item key={id} name={name} avatar={avatar} />
            })
        }
    </div>
    </>)
}

export default IGStory;