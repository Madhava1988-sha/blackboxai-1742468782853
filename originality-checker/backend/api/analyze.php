<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $text = $data['text'] ?? '';

    if (empty($text)) {
        http_response_code(400);
        echo json_encode(['error' => 'No text provided']);
        exit;
    }

    // Simulate AI detection analysis
    $aiScore = rand(60, 100);
    $isAIGenerated = $aiScore > 80;
    
    // Simulate readability analysis
    $readabilityScore = rand(70, 100);
    $readabilityGrade = ['Elementary', 'Intermediate', 'College', 'Academic'][rand(0, 3)];
    
    // Simulate related papers
    $papers = [
        [
            'title' => 'Advanced Natural Language Processing in Academic Writing',
            'authors' => 'Smith, J., Johnson, M.',
            'year' => 2023,
            'citations' => rand(50, 200)
        ],
        [
            'title' => 'The Evolution of AI-Generated Content Detection',
            'authors' => 'Williams, R., Brown, K.',
            'year' => 2022,
            'citations' => rand(50, 200)
        ],
        [
            'title' => 'Machine Learning Approaches to Text Analysis',
            'authors' => 'Davis, A., Miller, P.',
            'year' => 2023,
            'citations' => rand(50, 200)
        ]
    ];

    $response = [
        'detection' => [
            'isAIGenerated' => $isAIGenerated,
            'confidence' => $aiScore,
            'analysis' => [
                'uniquePatterns' => rand(50, 100),
                'consistencyScore' => rand(70, 100)
            ]
        ],
        'readability' => [
            'score' => $readabilityScore,
            'grade' => $readabilityGrade,
            'suggestions' => [
                'Consider breaking down complex sentences',
                'Use more academic vocabulary',
                'Improve paragraph transitions'
            ]
        ],
        'scholar' => $papers
    ];

    echo json_encode($response);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>