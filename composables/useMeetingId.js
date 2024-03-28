export const useMeetingId = async (countryName, year) => {
    const meetingId = ref(null);
    const { data, error } = await useFetch(`https://api.openf1.org/v1/meetings?country_name=${countryName}&year=${year}`, {
        transform: (data) => data[0].meeting_key
    });

    meetingId.value = data;
    return { meetingId, error }

}