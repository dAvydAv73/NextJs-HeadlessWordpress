import { PropertyCard } from "./PropertyCard";

export const Results = ({ properties }) => {
    console.log({ properties });
    return(
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
        {properties.map((property) => (
          <PropertyCard
            key={property.databaseId}
            title={property.title}
            destination={property.uri}
            bedrooms={property.propertyFeatures.bedrooms}
            bathrooms={property.propertyFeatures.bathrooms}
            price={property.propertyFeatures.price}
            hasParking={property.propertyFeatures.parking}
            petFriendly={property.propertyFeatures.petFriendly}
            image={property.featuredImage?.node?.sourceUrl}
          />
        ))}
      </div>
    );
};  