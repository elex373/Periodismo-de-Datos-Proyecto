$(document).ready(function(){
    $.getJSON('data.json', function(data){

        var events = GetEvents(data)
        console.log(events)

        var regions96 = GetRegionRepresentation96(data)
        var regions24 = GetRegionRepresentation24(data)
        var regions8 = GetRegionRepresentation8(data)

        var regions = regions96

        $("#spots").on("change", function(){
            var top = $(this).val()
            console.log(top)
            if(top == "96"){
                regions = regions96
            }
            else if(top == "24"){
                regions = regions24
            }
            else if(top == "8"){
                regions = regions8
            }

            chart_data.datasets = GetDataGraph(regions)

            chart.update()
        })


        var ctx = document.getElementById("regions")

        const chart_data = {
            labels: events,
            datasets: GetDataGraph(regions)
        }

        var chart = new Chart(ctx, {
            type: "bar",

            data: chart_data,

            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Region Representation EVO 2023"
                    },
                },

                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                    }
                }
            },
        })

        console.log(regions96)
        console.log(regions24)
        console.log(regions8)

    })

    function GetDataGraph(regions){
        return  [
                {
                    label: "Norte America",
                    data: regions.NA,
                    backgroundColor: 'rgb(255, 99, 132)',
                },

                {
                    label: "Japon",
                    data: regions.JPN,
                    backgroundColor: 'rgb(54, 162, 235)',
                },
                {
                    label: "Medio Oriente",
                    data: regions.MO,
                    backgroundColor: 'rgb(255, 159, 64)',
                },
                {
                    label: "Europa",
                    data: regions.EU,
                    backgroundColor: 'rgb(153, 102, 255)',
                },
                {
                    label: "Latino America",
                    data: regions.LA,
                    backgroundColor: 'rgb(75, 192, 192)',
                },
                {
                    label: "Korea del Sur",
                    data: regions.SK,
                    backgroundColor: 'rgb(255, 205, 86)',
                },
                {
                    label: "Asia",
                    data: regions.ASIA,
                    backgroundColor: 'rgb(4, 250, 248)',
                },
                {
                    label: "Africa",
                    data: regions.Otro,
                    backgroundColor: 'rgb(36, 42, 42)'
                }
                
                
            ]
    }

    function GetEvents(data){

        let events = []

        $.each(data.EVO.events, function(key, event){
            events.push(event.event_name)
        })
        return events
    }

    function GetRegionRepresentation96(data){
        let regions = {
            NA: [],
            JPN: [],
            LA: [],
            MO: [],
            EU: [],
            SK: [],
            ASIA: [],
            Otro: []
        }

        $.each(data.EVO.events, function(key, event){
            let NA = 0
            let JPN = 0
            let LA = 0
            let MO = 0
            let EU = 0
            let SK = 0
            let ASIA = 0
            let Otro = 0

            $.each(event.participants, function(pkey, participant){
                switch (participant.country){
                    case "NA":
                        NA++
                        break
                    case "JPN":
                        JPN++
                        break
                    case "LA":
                        LA++
                        break
                    case "MO":
                        MO++
                        break
                    case "EU":
                        EU++
                        break
                    case "SK":
                        SK++
                        break
                    case "ASIA":
                        ASIA++
                        break
                    default:
                        Otro++
                        break
                }

            })
            regions.NA.push(NA)
            regions.JPN.push(JPN)
            regions.LA.push(LA)
            regions.SK.push(SK)
            regions.MO.push(MO)
            regions.EU.push(EU)
            regions.ASIA.push(ASIA)
            regions.Otro.push(Otro)
        })
        return regions
    }

    function GetRegionRepresentation24(data){
        let regions = {
            NA: [],
            JPN: [],
            LA: [],
            MO: [],
            EU: [],
            SK: [],
            ASIA: [],
            Otro: []
        }

        $.each(data.EVO.events, function(key, event){
            let NA = 0
            let JPN = 0
            let LA = 0
            let MO = 0
            let EU = 0
            let SK = 0
            let ASIA = 0
            let Otro = 0

            $.each(event.participants, function(pkey, participant){
                if(participant.spot == "top 24" || participant.spot == "top 8"){
                    switch (participant.country){
                        case "NA":
                            NA++
                            break
                        case "JPN":
                            JPN++
                            break
                        case "LA":
                            LA++
                            break
                        case "MO":
                            MO++
                            break
                        case "EU":
                            EU++
                            break
                        case "SK":
                            SK++
                            break
                        case "ASIA":
                            ASIA++
                            break
                        default:
                            Otro++
                            break
                    }
                }

            })
            regions.NA.push(NA)
            regions.JPN.push(JPN)
            regions.LA.push(LA)
            regions.SK.push(SK)
            regions.MO.push(MO)
            regions.EU.push(EU)
            regions.ASIA.push(ASIA)
            regions.Otro.push(Otro)
        })
        return regions
    }

    function GetRegionRepresentation8(data){
        let regions = {
            NA: [],
            JPN: [],
            LA: [],
            MO: [],
            EU: [],
            SK: [],
            ASIA: [],
            Otro: []
        }

        $.each(data.EVO.events, function(key, event){
            let NA = 0
            let JPN = 0
            let LA = 0
            let MO = 0
            let EU = 0
            let SK = 0
            let ASIA = 0
            let Otro = 0

            $.each(event.participants, function(pkey, participant){
                if(participant.spot == "top 8"){
                    switch (participant.country){
                        case "NA":
                            NA++
                            break
                        case "JPN":
                            JPN++
                            break
                        case "LA":
                            LA++
                            break
                        case "MO":
                            MO++
                            break
                        case "EU":
                            EU++
                            break
                        case "SK":
                            SK++
                            break
                        case "ASIA":
                            ASIA++
                            break
                        default:
                            Otro++
                            break
                    }
                }

            })
            regions.NA.push(NA)
            regions.JPN.push(JPN)
            regions.LA.push(LA)
            regions.SK.push(SK)
            regions.MO.push(MO)
            regions.EU.push(EU)
            regions.ASIA.push(ASIA)
            regions.Otro.push(Otro)
        })
        return regions
    }
    
})
