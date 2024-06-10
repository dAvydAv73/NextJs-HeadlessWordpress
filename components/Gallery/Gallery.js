import Image from "next/image";

export const Gallery = ({columns, cropImages, items}) =>{
    console.log('GALLERY :', items);
    console.log('cropImages :', cropImages);
    
    let maxHeight= 0;
    let maxWidth = 0;
    const ColumnWidth = 100/ columns;
    if(cropImages){
        items.forEach(item => {
            if(item.attributes.height > maxHeight){
                maxHeight = item.attributes.height;
            }
            if(item.attributes.width > maxWidth){
                maxWidth = item.attributes.width;
            }
        });
    }

    return (
        <div className="flex flex-wrap max-5-xl mx-auto">
            {items.map(item=> (
                <div
                    key={item.id}
                    style={{width: `${ColumnWidth}%` }}
                    className="p-5 flex-grow"
                >
                    <Image
                        className="coverImage"
                        src={item.attributes.url}
                        height={maxHeight || item.attributes.height}
                        width={maxWidth || item.attributes.width}
                        alt={item.attributes.alt || 'some text'}
                        
                    />
                </div>
            ))}
        </div>
    )
}