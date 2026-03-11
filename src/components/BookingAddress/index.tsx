"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

const defaultCenter = {
  lat: 28.6139,
  lng: 77.2090,
};

export default function BookingAddressForm() {

  const router = useRouter();
  const mapRef = useRef<google.maps.Map | null>(null);

  const [position, setPosition] = useState(defaultCenter);
  const [addressType, setAddressType] = useState("Home");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationUsed, setLocationUsed] = useState(false);

  const [formData, setFormData] = useState({
    fullAddress: "",
    houseNo: "",
    floor: "",
    street: "",
    country: "India",
    state: "Uttar Pradesh",
    pincode: "",
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  // Reverse Geocode
  const fetchAddressFromLatLng = async (lat: number, lng: number) => {

    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );

    const data = await res.json();

    if (data.results?.length > 0) {
      setFormData((prev) => ({
        ...prev,
        fullAddress: data.results[0].formatted_address,
      }));
    }
  };

  // Get Current Location
  const getCurrentLocation = () => {

    if (!navigator.geolocation) return;

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {

        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        const newPos = { lat, lng };

        setPosition(newPos);
        setLocationUsed(true);

        if (mapRef.current) {
          mapRef.current.panTo(newPos);
        }

        fetchAddressFromLatLng(lat, lng);

        setLoadingLocation(false);
      },
      () => setLoadingLocation(false)
    );
  };

  // Validation
  const validateAddress = () => {

    if (locationUsed) return true;

    if (!formData.houseNo || !formData.street || !formData.pincode) {

      alert("Please fill full Address");

      return false;
    }

    return true;
  };

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <div className="min-h-screen bg-gray-50 pt-55 pb-10 px-4">

      <div className="max-w-[800px] mx-auto bg-white rounded-3xl shadow-xl p-6 space-y-6">

        {/* Heading */}
        <div>
          <h2 className="text-2xl font-semibold text-[#14455b]">
            Address
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Choose your location and fill address details
          </p>
        </div>

        {/* MAP */}
        <div className="rounded-2xl overflow-hidden border">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "220px" }}
            center={position}
            zoom={15}
            onLoad={(map) => {
              mapRef.current = map;
            }}
          >

            <Marker
              position={position}
              draggable
              onDragEnd={(e) => {

                const lat = e.latLng?.lat() || 0;
                const lng = e.latLng?.lng() || 0;

                const newPos = { lat, lng };

                setPosition(newPos);

                if (mapRef.current) {
                  mapRef.current.panTo(newPos);
                }

                fetchAddressFromLatLng(lat, lng);
              }}
            />

          </GoogleMap>
        </div>

        {/* Current Location Button */}
        <button
          onClick={getCurrentLocation}
          className="w-full bg-[#3683ab] hover:bg-[#14455b] text-white py-3 rounded-xl font-medium transition"
        >
          {loadingLocation ? "Fetching location..." : "Use Current Location"}
        </button>

        {/* Auto Address */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Detected Address
          </label>

          <input
            type="text"
            value={formData.fullAddress}
            readOnly
            className="mt-2 w-full border border-gray-300 bg-gray-100 p-3 rounded-xl text-sm"
          />
        </div>

        {/* Address Type */}
        <div>

          <label className="text-sm font-medium text-gray-600">
            Address Type
          </label>

          <div className="flex gap-4 mt-3">

            {["Home", "Office", "Other"].map((type) => (

              <button
                key={type}
                type="button"
                onClick={() => setAddressType(type)}
                className={`flex-1 py-2 rounded-xl border text-sm font-medium transition ${
                  addressType === type
                    ? "bg-[#3683ab] text-white border-[#3683ab]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {type}
              </button>

            ))}

          </div>

        </div>

        {/* Manual Fields */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="House/Office No."
            value={formData.houseNo}
            onChange={(e) =>
              setFormData({ ...formData, houseNo: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#3683ab] outline-none"
          />

          <input
            type="text"
            placeholder="Floor"
            value={formData.floor}
            onChange={(e) =>
              setFormData({ ...formData, floor: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#3683ab] outline-none"
          />

          <input
            type="text"
            placeholder="Street / Area"
            value={formData.street}
            onChange={(e) =>
              setFormData({ ...formData, street: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#3683ab] outline-none"
          />

          <input
            type="text"
            value="India"
            readOnly
            className="w-full border border-gray-200 bg-gray-100 p-3 rounded-xl text-gray-500"
          />

          <input
            type="text"
            value="Uttar Pradesh"
            readOnly
            className="w-full border border-gray-200 bg-gray-100 p-3 rounded-xl text-gray-500"
          />

          <input
            type="text"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={(e) =>
              setFormData({ ...formData, pincode: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#3683ab] outline-none"
          />

        </div>

        {/* Add Address Button */}
        <button
          onClick={() => {

            if (!validateAddress()) return;

            const addressData = {
              ...formData,
              addressType,
              lat: position.lat,
              lng: position.lng,
            };

            localStorage.setItem(
              "selectedAddress",
              JSON.stringify(addressData)
            );

            router.push("/booking");

          }}
          className="w-full bg-[#3683ab] hover:bg-[#14455b] text-white py-4 rounded-2xl font-semibold text-lg transition"
        >
          Add Address
        </button>

      </div>
    </div>
  );
}