export const chatFlow = [
    {
      botMessage: {
        id: 1,
        sender: "bot",
        text: "Hi there! I'm your Japan travel assistant. I see you're planning a 4-day trip to Tokyo and Kyoto. Based on your preferences for adventure, culture, and history, I have some exciting activities to suggest!",
        timestamp: new Date(),
      },
      options: [
        {
          text: "Great! I'm excited to hear your suggestions.",
          activeActivity: null,
        },
      ],
    },
    {
      botMessage: {
        id: 2,
        sender: "bot",
        text: "Here are two very different activities that I think you'll love:",
        timestamp: new Date(),
        activities: [
          {
            name: "MariCAR Go-Kart Tour",
            location: "Shibuya, Tokyo",
            area: "Tokyo",
            duration: "2-3 hours",
            description:
              "Experience Tokyo like never before by driving through the streets of Shibuya in a go-kart! Dress up as your favorite character and zoom past iconic landmarks like Shibuya Crossing and Tokyo Tower.",
            recommendation:
              "This is perfect for your adventure-loving spirit! It's a unique way to see Tokyo from a different perspective while getting your adrenaline pumping.",
            image: "/car.jpg?height=300&width=500",
            tags: ["Adventure", "Unique", "City Tour"],
          },
          {
            name: "Traditional Tea Ceremony",
            location: "Gion District, Kyoto",
            area: "Kyoto",
            duration: "1-2 hours",
            description:
              "Immerse yourself in Japanese culture with an authentic tea ceremony in a historic teahouse in Gion, Kyoto's famous geisha district. Learn about the centuries-old traditions and the art of preparing matcha tea.",
            recommendation:
              "This aligns perfectly with your interest in culture and history. The tea ceremony is a window into Japan's rich cultural heritage and takes place in one of Kyoto's most historic districts.",
            image: "/tea.jpg?height=300&width=500",
            tags: ["Culture", "History", "Traditional"],
          },
        ],
      },
      options: [
        {
          text: "The go-kart tour sounds amazing! I'd love to do that in Tokyo.",
          activities: [
            {
              name: "MariCAR Go-Kart Tour",
              location: "Shibuya, Tokyo",
              area: "Tokyo",
              duration: "2-3 hours",
              description:
                "Experience Tokyo like never before by driving through the streets of Shibuya in a go-kart! Dress up as your favorite character and zoom past iconic landmarks like Shibuya Crossing and Tokyo Tower.",
              recommendation:
                "This is perfect for your adventure-loving spirit! It's a unique way to see Tokyo from a different perspective while getting your adrenaline pumping.",
              image: "/car.jpg?height=300&width=500",
              tags: ["Adventure", "Unique", "City Tour"],
            },
          ],
          activeActivity: {
            name: "MariCAR Go-Kart Tour",
            location: "Shibuya, Tokyo",
            area: "Tokyo",
            duration: "2-3 hours",
            description:
              "Experience Tokyo like never before by driving through the streets of Shibuya in a go-kart! Dress up as your favorite character and zoom past iconic landmarks like Shibuya Crossing and Tokyo Tower.",
            recommendation:
              "This is perfect for your adventure-loving spirit! It's a unique way to see Tokyo from a different perspective while getting your adrenaline pumping.",
            image: "/car.jpg?height=300&width=500",
            tags: ["Adventure", "Unique", "City Tour"],
          },
        },
        {
          text: "I'm more interested in the tea ceremony in Kyoto for the cultural experience.",
          activities: [
            {
              name: "Traditional Tea Ceremony",
              location: "Gion District, Kyoto",
              area: "Kyoto",
              duration: "1-2 hours",
              description:
                "Immerse yourself in Japanese culture with an authentic tea ceremony in a historic teahouse in Gion, Kyoto's famous geisha district. Learn about the centuries-old traditions and the art of preparing matcha tea.",
              recommendation:
                "This aligns perfectly with your interest in culture and history. The tea ceremony is a window into Japan's rich cultural heritage and takes place in one of Kyoto's most historic districts.",
              image: "/tea.jpg?height=300&width=500",
              tags: ["Culture", "History", "Traditional"],
            },
          ],
          activeActivity: {
            name: "Traditional Tea Ceremony",
            location: "Gion District, Kyoto",
            area: "Kyoto",
            duration: "1-2 hours",
            description:
              "Immerse yourself in Japanese culture with an authentic tea ceremony in a historic teahouse in Gion, Kyoto's famous geisha district. Learn about the centuries-old traditions and the art of preparing matcha tea.",
            recommendation:
              "This aligns perfectly with your interest in culture and history. The tea ceremony is a window into Japan's rich cultural heritage and takes place in one of Kyoto's most historic districts.",
            image: "/tea.jpg?height=300&width=500",
            tags: ["Culture", "History", "Traditional"],
          },
        },
        {
          text: "Both sound great! Can we do both?",
          activities: [
            {
              name: "MariCAR Go-Kart Tour",
              location: "Shibuya, Tokyo",
              area: "Tokyo",
              duration: "2-3 hours",
              description:
                "Experience Tokyo like never before by driving through the streets of Shibuya in a go-kart! Dress up as your favorite character and zoom past iconic landmarks like Shibuya Crossing and Tokyo Tower.",
              recommendation:
                "This is perfect for your adventure-loving spirit! It's a unique way to see Tokyo from a different perspective while getting your adrenaline pumping.",
              image: "/car.jpg?height=300&width=500",
              tags: ["Adventure", "Unique", "City Tour"],
            },
            {
              name: "Traditional Tea Ceremony",
              location: "Gion District, Kyoto",
              area: "Kyoto",
              duration: "1-2 hours",
              description:
                "Immerse yourself in Japanese culture with an authentic tea ceremony in a historic teahouse in Gion, Kyoto's famous geisha district. Learn about the centuries-old traditions and the art of preparing matcha tea.",
              recommendation:
                "This aligns perfectly with your interest in culture and history. The tea ceremony is a window into Japan's rich cultural heritage and takes place in one of Kyoto's most historic districts.",
              image: "/tea.jpg?height=300&width=500",
              tags: ["Culture", "History", "Traditional"],
            },
          ],
          activeActivity: null,
        },
      ],
    },
    {
      botMessage: {
        id: 3,
        sender: "bot",
        text: "Great choice! Based on your preferences, here's a suggested 4-day itinerary for your Japan trip:",
        timestamp: new Date(),
        activities: [
          {
            name: "Day 1: Tokyo Exploration",
            location: "Tokyo",
            area: "Tokyo",
            duration: "Full day",
            description:
              "Start with the MariCAR Go-Kart Tour in the morning, followed by exploring Shibuya Crossing and Harajuku for youth culture. End the day with dinner at Shinjuku's vibrant food alleys.",
            image: "/car.jpg?height=300&width=500",
            tags: ["Adventure", "Urban", "Food"],
          },
          {
            name: "Day 2: Tokyo Cultural Day",
            location: "Tokyo",
            area: "Tokyo",
            duration: "Full day",
            description:
              "Visit the historic Senso-ji Temple in Asakusa, explore the serene Meiji Shrine, and experience the digital art museum TeamLab Borderless for a blend of tradition and innovation.",
            image: "/placeholder.svg?height=300&width=500",
            tags: ["Culture", "History", "Art"],
          },
          {
            name: "Day 3: Kyoto Temples & Gardens",
            location: "Kyoto",
            area: "Kyoto",
            duration: "Full day",
            description:
              "Visit the iconic Fushimi Inari Shrine with its thousands of torii gates, explore the bamboo groves of Arashiyama, and see the golden Kinkaku-ji Temple.",
            image: "/placeholder.svg?height=300&width=500",
            tags: ["History", "Nature", "Spiritual"],
          },
          {
            name: "Day 4: Kyoto Cultural Immersion",
            location: "Kyoto",
            area: "Kyoto",
            duration: "Full day",
            description:
              "Participate in the Traditional Tea Ceremony in Gion, explore Nishiki Market for local foods, and take an evening walking tour of the historic Gion district with a chance to spot geishas.",
            image: "/tea.jpg?height=300&width=500",
            tags: ["Culture", "Food", "Traditional"],
          },
        ],
      },
      options: [
        {
          text: "This itinerary looks perfect! I'd like to confirm these activities.",
          activeActivity: null,
        },
        {
          text: "Can we adjust the itinerary a bit? I'd like more nature activities.",
          activeActivity: null,
        },
      ],
    },
    {
      botMessage: {
        id: 4,
        sender: "bot",
        text: "Excellent! Your 4-day Japan adventure is now confirmed. I've added all the activities to your itinerary. You'll experience the perfect blend of adventure, culture, and history across Tokyo and Kyoto. Is there anything else you'd like to know about your trip?",
        timestamp: new Date(),
      },
      options: [
        {
          text: "What about transportation between Tokyo and Kyoto?",
          activeActivity: null,
        },
        {
          text: "Any food recommendations for our trip?",
          activeActivity: null,
        },
        {
          text: "No, that's all I need for now. Thank you!",
          activeActivity: null,
        },
      ],
    },
    {
      botMessage: {
        id: 5,
        sender: "bot",
        text: "For transportation between Tokyo and Kyoto, I recommend taking the Shinkansen (bullet train). It's the fastest and most convenient option, taking about 2.5 hours. You can purchase a Japan Rail Pass before your trip if you plan to use the train multiple times, which could save you money. The trains are comfortable, punctual, and offer beautiful views of the Japanese countryside. Would you like me to provide more details about the Japan Rail Pass?",
        timestamp: new Date(),
      },
      options: [
        {
          text: "That's helpful, thanks! I think we're all set for our trip now.",
          activeActivity: null,
        },
      ],
    },
  ]
  