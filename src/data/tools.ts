import { 
  FileText, 
  Check, 
  RotateCcw, 
  AlignJustify, 
  AlertCircle,
  Type, 
  Hash, 
  BarChart,
  Cloud,
  Users,
  BadgeCheck,
  AlignLeft,
  FileBarChart,
  Layers,
  Bot,
  Anchor,
  Brain,
  Languages,
  CheckCheck,
  BookOpen,
  BarChart2,
  Heart,
  CloudSun
} from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: any;
  action: string;
}

export const basicTools: Tool[] = [
  {
    id: 'count-words',
    name: 'Count Words',
    description: 'Count the number of words in the text',
    icon: FileText,
    action: 'count-words'
  },
  {
    id: 'count-punctuation',
    name: 'Count Punctuation',
    description: 'Count punctuation marks in the text',
    icon: Check,
    action: 'count-punctuation'
  },
  {
    id: 'most-repeated-word',
    name: 'Show Most Repeated Word',
    description: 'Find the most frequently used word',
    icon: BarChart,
    action: 'most-repeated-word'
  },
  {
    id: 'least-repeated-word',
    name: 'Show Least Repeated Word',
    description: 'Find the least frequently used word',
    icon: BarChart2,
    action: 'least-repeated-word'
  },
  {
    id: 'to-lowercase',
    name: 'Convert to Lowercase',
    description: 'Convert all text to lowercase',
    icon: Type,
    action: 'to-lowercase'
  },
  {
    id: 'to-uppercase',
    name: 'Convert to Uppercase',
    description: 'Convert all text to uppercase',
    icon: Type,
    action: 'to-uppercase'
  },
  {
    id: 'remove-punctuation',
    name: 'Remove Punctuation',
    description: 'Remove all punctuation marks from the text',
    icon: Type,
    action: 'remove-punctuation'
  },
  {
    id: 'remove-numbers',
    name: 'Remove Numbers',
    description: 'Remove all numbers from the text',
    icon: Hash,
    action: 'remove-numbers'
  },
  {
    id: 'remove-extra-whitespace',
    name: 'Remove Extra Whitespace',
    description: 'Remove unnecessary whitespace from the text',
    icon: AlignJustify,
    action: 'remove-extra-whitespace'
  },
  {
    id: 'average-word-length',
    name: 'Find Average Word Length',
    description: 'Calculate the average length of words',
    icon: Type,
    action: 'average-word-length'
  },
  {
    id: 'average-sentence-length',
    name: 'Find Average Sentence Length',
    description: 'Calculate the average length of sentences',
    icon: AlignLeft,
    action: 'average-sentence-length'
  },
  {
    id: 'reverse-text',
    name: 'Reverse Text',
    description: 'Reverse the order of characters in the text',
    icon: RotateCcw,
    action: 'reverse-text'
  },
  {
    id: 'count-unique-words',
    name: 'Count Unique Words',
    description: 'Count the number of unique words in the text',
    icon: AlertCircle,
    action: 'count-unique-words'
  },
  {
    id: 'extract-proper-nouns',
    name: 'Extract Proper Nouns',
    description: 'Extract proper nouns from the text',
    icon: Users,
    action: 'extract-proper-nouns'
  },
  {
    id: 'readability-score',
    name: 'Readability Score',
    description: 'Calculate the readability score of the text',
    icon: BookOpen,
    action: 'readability-score'
  }
];

export const advancedTools: Tool[] = [
  {
    id: 'word_tokenizer',
    name: 'Word Tokenization',
    description: 'Split text into individual words',
    icon: Layers,
    action: 'word_tokenizer'
  },
  {
    id: 'sentence_tokenizer',
    name: 'Sentence Tokenization',
    description: 'Split text into individual sentences',
    icon: AlignLeft,
    action: 'sentence_tokenizer'
  },
  {
    id: 'remove_stopwords',
    name: 'Remove Stopwords',
    description: 'Remove common stopwords from the text',
    icon: BadgeCheck,
    action: 'remove_stopwords'
  },
  {
    id: 'perform_stemming',
    name: 'Stemming',
    description: 'Reduce words to their root/stem form',
    icon: Bot,
    action: 'perform_stemming'
  },
  {
    id: 'perform_lemmatization',
    name: 'Lemmatization',
    description: 'Reduce words to their base or dictionary form',
    icon: Brain,
    action: 'perform_lemmatization'
  },
  {
    id: 'pos_tagging',
    name: 'POS Tagging',
    description: 'Mark words with their part of speech',
    icon: Anchor,
    action: 'pos_tagging'
  },
  {
    id: 'tfidf_vectorization',
    name: 'TF-IDF Vectorization',
    description: 'Calculate term frequency-inverse document frequency',
    icon: FileBarChart,
    action: 'tfidf_vectorization'
  },
  {
    id: 'language_detection',
    name: 'Language Detection',
    description: 'Detect the language of the text',
    icon: Languages,
    action: 'language_detection'
  },
  {
    id: 'spell_check_and_grammar',
    name: 'Spell Checking & Grammar Correction',
    description: 'Identify and correct spelling and grammar errors',
    icon: CheckCheck,
    action: 'spell_check_and_grammar'
  },
  {
    id: 'named_entity_recognition',
    name: 'Entity Recognition',
    description: 'Identify and classify named entities in text (people, organizations, locations, etc.)',
    icon: Users,
    action: 'named_entity_recognition'
  },
  {
    id: 'topic_modeling',
    name: 'Topic Modelling',
    description: 'Extract and identify main topics and themes from the text',
    icon: Layers,
    action: 'topic_modeling'
  }
];

export const visualizationTools: Tool[] = [
  {
    id: 'wordcloud',
    name: 'Word Cloud File',
    description: 'Generate a word cloud visualization from your file',
    icon: Cloud,
    action: 'wordcloud'
  },
  {
    id: 'frequency-plot',
    name: 'Frequency Plot',
    description: 'Plot word frequency distribution',
    icon: BarChart,
    action: 'frequency-plot'
  },
  {
    id: 'sentiment-graphs',
    name: 'Sentiment Chart',
    description: 'Visualize sentiment distribution in the text',
    icon: Heart,
    action: 'sentiment-graphs'
  },
  {
    id: 'tfidf-heatmap',
    name: 'TF-IDF Heatmap',
    description: 'Create a heatmap of TF-IDF values',
    icon: CloudSun,
    action: 'tfidf-heatmap'
  }
];

export const sentimentTools: Tool[] = [
  {
    id: 'analyze',
    name: 'Perform Sentiment Analysis',
    description: 'Analyze the sentiment of the text',
    icon: Heart,
    action: 'analyze'
  },
  {
    id: 'detailed-analysis',
    name: 'Detailed Sentiment Analysis',
    description: 'Perform in-depth sentiment analysis including emotion detection, subjectivity analysis, and aspect-based sentiment Note : Add Multiple Sentences Not Single Sentence ',
    icon: FileBarChart,
    action: 'detailed-analysis'
  }
]; 