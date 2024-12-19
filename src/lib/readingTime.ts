const calculateReadingTime = (text: string): string => {
  const wordsPerMinute = 200; // 평균 WPM

  // Markdown 기호 제거: 정규식을 사용해 Markdown 문법 제거
  const plainText = text
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // 굵게 (** 또는 __)
    .replace(/(\*|_)(.*?)\1/g, '$2') // 기울임 (* 또는 _)
    .replace(/`{1,3}[^`]*`{1,3}/g, '') // 인라인 코드 (` `)
    .replace(
      /!$begin:math:display$.*?$end:math:display$$begin:math:text$.*?$end:math:text$/g,
      '',
    ) // 이미지 (![alt](url))
    .replace(
      /$begin:math:display$.*?$end:math:display$$begin:math:text$.*?$end:math:text$/g,
      '',
    ) // 링크 ([text](url))
    .replace(/#+\s/g, '') // 헤더 (#)
    .replace(/>\s/g, '') // 블록 인용 (>)
    .replace(/[-+*]\s/g, '') // 리스트 아이템 (-, +, *)
    .replace(/\s+/g, ' ') // 공백 정리
    .trim(); // 양끝 공백 제거

  // 단어 수 계산
  const words = plainText.split(/\s+/).filter((word) => word.length > 0).length;

  // 읽기 시간 계산
  const readingTime = words / wordsPerMinute;

  if (readingTime < 1) {
    return '1분 미만';
  } else {
    const minutes = Math.ceil(readingTime); // 소수점 올림 처리
    return `${minutes}분`;
  }
};

export default calculateReadingTime;
