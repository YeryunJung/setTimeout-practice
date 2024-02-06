function startCPUHeavyTaskWithoutOptimization() {
  let result = 0;
  // 반복문 3만번 돌릴 때까지 페이지는 먹통
  // 메인 스레드 <= 3만번 출력 / 그 다음 작업
  for (let i = 0; i < 30000; i++) {
    result += 1;
  }
  console.log("[Not Optimized] done!!!", result);
  return result;
}
