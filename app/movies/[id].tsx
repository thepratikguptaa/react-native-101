import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MovieInfoProps {
    label: string;
    value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
    <View className="flex-col items-start justify-center mt-5">
        <Text className="text-light-200 font-normal text-sm">{label}</Text>
        <Text className="text-light-100 font-bold text-sm mt-2">
            {value || "N/A"}
        </Text>
    </View>
);

const MovieDetails = () => {
    const { id } = useLocalSearchParams();

    const { data: movie, loading } = useFetch(() =>
        fetchMovieDetails(id as string)
    );

    return (
        <View className="bg-primary flex-1">
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View>
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
                        }}
                        className="w-full h-[600px]"
                        resizeMode="contain"
                    />
                </View>
                <View className="flex-col items-start justify-center mt-5 px-5">
                    <Text className="text-white text-3xl font-bold">{movie?.title}</Text>
                    <View className="flex-row items-center gap-x-2 mt-2">
                        <Text className="text-light-200 text-sm">
                            {movie?.release_date?.split("-")[0]}
                        </Text>
                        <Text className="text-light-200 text-sm">{movie?.runtime} min</Text>
                    </View>
                    <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
                        <Image source={icons.star} className="size-4" />
                        <Text className="text-white font-bold text-sm">
                            {Math.round(movie?.vote_average ?? 0)}/10
                        </Text>
                        <Text className="text-light-200 text-sm">
                            ({movie?.vote_count} votes)
                        </Text>
                    </View>

                    <MovieInfo label="Overview" value={movie?.overview} />
                    <MovieInfo
                        label="Genres"
                        value={
                            movie?.genres?.map((genre) => genre.name).join(", ") || "N/A"
                        }
                    />
                    <View className="flex flex-row justify-between w-1/2">
                        <MovieInfo
                            label="Budget"
                            value={`₹${(movie?.budget / 10_000_000)?.toFixed(2)} crore`}
                        />
                        <MovieInfo
                            label="Revenue"
                            value={`₹${(movie?.revenue / 10_000_000)?.toFixed(2)} crore`}
                        />
                    </View>
                    
                    <View className="flex flex-row justify-between w-1/2">
                        <MovieInfo
                            label="Status"
                            value={movie?.status}
                        />
                        <MovieInfo
                            label="Release Date"
                            value={movie?.release_date}
                        />
                    </View>

                    <MovieInfo
                        label="Production Companies"
                        value={
                            movie?.production_companies.map((c) => c.name).join(", ") || "N/A"
                        }
                    />

                    <MovieInfo 
                        label="Cast"
                        value={movie?.credits?.cast?.map((c) => c.name).join(", ") || "N/A"}
                    />

                    <MovieInfo 
                        label="Director"
                        value={movie?.credits?.crew?.find((d) => d.job === "Director")?.name || "N/A"}
                    />

                    <MovieInfo 
                        label="Tagline"
                        value={movie?.tagline || "N/A"}
                    />

                </View>
            </ScrollView>

            <TouchableOpacity
                className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
                onPress={router.back}
            >
                <Image
                    source={icons.arrow}
                    className="size-5 mr-1 mt-0.5 rotate-180"
                    tintColor="#fff"
                />
                <Text className="text-white font-semibold text-base">Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MovieDetails;
