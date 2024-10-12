

function ItemList({ data }:any) {
  return (
    <div>
      {data.length ? (
        <ul className="pr-5 mb-12 ">
          {data.map(({amenity, index}:any) => (
            <li className="marker:text-[#304ffe]" key={index}>{amenity}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
