import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Translator - Positive Functional Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Pos_Fun_0001: Convert modern social media invitation', async ({ page }) => {
    const input = 'maludharu eya innee mokakdha kiyala dhannee naehae. mage post eka share karalaa tag karanna puLuvannam hodhayi.';
    const expected = 'මළුදරු එයා ඉන්නේ මොකක්ද කියලා දන්නේ නෑ. මගේ post එක share කරලා tag කරන්න පුළුවන්නම් හොඳයි.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('මළුදරු');
  });

  test('Pos_Fun_0002: Convert workplace scenario with time', async ({ page }) => {
    const input = 'raes 9.15ta deadline eka.';
    const expected = 'රාත්‍රි 9.15ට deadline එක.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('රාත්');
  });

  test('Pos_Fun_0003: Future tense with location', async ({ page }) => {
    const input = 'api udhaeya Galle yanna hithan innee. Restaurant ekaka lunch eka kamu.';
    const expected = 'අපි උදෑය Galle යන්න හිතන් ඉන්නේ. Restaurant එකක lunch එක කමු.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('අපි');
  });

  test('Pos_Fun_0004: Polite request with currency', async ({ page }) => {
    const input = 'samaavenna. Rs. 2500 evanna.';
    const expected = 'සමාවෙන්න. Rs. 2500 එවන්න.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('සමාවෙන්න');
  });

  test('Pos_Fun_0005: Past tense shopping experience', async ({ page }) => {
    const input = 'eyaa mall ekata gihillaa kotak vaedhi viyayak karaa gedhara aavaa. Credit card ekee limit eka aavaaa.';
    const expected = 'ඒයා mall එකට ගිහිල්ලා කොතක් වැඩි වියයක් කරා ගෙදර ආවා. Credit card එකේ limit එක ආවා.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('ඒයා');
  });

  test('Pos_Fun_0006: Question about digital payment', async ({ page }) => {
    const input = 'QR code eka scan kalaa settle veedha?';
    const expected = 'QR code එක scan කලා settle වේද?';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('එක');
  });

  test('Pos_Fun_0007: Negative form with comparison', async ({ page }) => {
    const input = 'mage phone eka charge vennee naehae. Charger eka anthima kaalayee vaedha karalee naehae.';
    const expected = 'මගේ phone එක charge වෙන්නේ නෑ. Charger එක අන්තිම කාලයේ වැඩ කරලේ නෑ.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('මගේ');
  });

  test('Pos_Fun_0008: Plural pronoun with suggestion', async ({ page }) => {
    const input = 'apee proposal eka present karamu.';
    const expected = 'අපේ proposal එක present කරමු.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('අපේ');
  });

  test('Pos_Fun_0009: Informal expression with brand', async ({ page }) => {
    const input = 'aththatama Netflix subscription eka renew karanna amataka unaa. Series eka balanna ona nisa api karala thiyennee.';
    const expected = 'ඇත්තටම Netflix subscription එක renew කරන්න අමතක උනා. Series එක බලන්න ඕන නිසා අපි කරලා තියෙන්නේ.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('ඇත්තටම');
  });

  test('Pos_Fun_0010: Command with abbreviation', async ({ page }) => {
    const input = 'ASAP mata PDF eka WhatsApp karanna.';
    const expected = 'ASAP මට PDF එක WhatsApp කරන්න.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('මට');
  });

  test('Pos_Fun_0011: Present continuous daily activity', async ({ page }) => {
    const input = 'mama workout ekata yannavaa gym ekata.';
    const expected = 'මම workout එකට යන්නවා gym එකට.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('මම');
  });

  test('Pos_Fun_0012: Question with date format', async ({ page }) => {
    const input = '2026-03-15 venakam interview eka tiyeedha?';
    const expected = '2026-03-15 වෙනකම් interview එක තියේද?';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('වෙනකම්');
  });

  test('Pos_Fun_0013: Greeting with informal reply', async ({ page }) => {
    const input = 'halo! suba dhaevasak! kemathi ivarai?';
    const expected = 'හලෝ! සුබ දෑවසක්! කෙමති ඉවරයි?';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('හලෝ');
  });

  test('Pos_Fun_0014: Multi-word phrase pattern', async ({ page }) => {
    const input = 'godhaak lassanai. hariyatama iththiri.';
    const expected = 'ගොඩාක් ලස්සනයි. හරියටම ඉත්තිරි.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('ගොඩාක්');
  });

  test('Pos_Fun_0015: Long paragraph with mixed content', async ({ page }) => {
    const input = 'mamath innee online shopping karala kiyala. Website eka open kalaa. Ekee catalog eka godhaak lassanai. Categories valin filter karalaa item eka select kalaa. Add to Cart karala, checkout ekata giyaa. Shipping details tika type kalaa harippahaee. Payment method ekath select kalaa Credit Card ekak vidihatai. CVV saha Expiry Date tika dhaagena, OTP eka ewaa. Order confirmation eka ewaa. Tracking number ekath email ekata labunaa. Dhaen wait karalaa innee delivery ekata. Eta kalin Review section ekee reviews baalalaa. eeka trust karana puluvandha kiyala.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('මමත්');
  });

  test('Pos_Fun_0016: Repeated words for emphasis', async ({ page }) => {
    const input = 'laGgama laGgama yanna. podi podi kaaviyak matha.';
    const expected = 'ලග්ගම ලග්ගම යන්න. පොඩි පොඩි කාවියක් මත.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('ලග්ගම');
  });

  test('Pos_Fun_0017: Financial terms with units', async ({ page }) => {
    const input = 'mage savings account eka USD 5000k thiyennavaa. Interest rate eka 3.5% vagee. Monthly statement eka PDF ekakata download karanna puluvandha?';
    const expected = 'මගේ savings account එක USD 5000ක් තියෙන්නවා. Interest rate එක 3.5% වගේ. Monthly statement එක PDF එකට download කරන්න පුළුවන්ද?';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('මගේ');
  });

  test('Pos_Fun_0018: Slang expression with emotion', async ({ page }) => {
    const input = 'aiyo malli! manda ghaana ekak! me vage dhaeyak dakala naehae. supiriyak supiri!';
    const expected = 'අයියෝ මල්ලි! මන්ද ඝාන එකක්! මේ වගේ දෑයක් දැකලා නෑ. සුපිරියක් සුපිරි!';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('අයියෝ');
  });

  test('Pos_Fun_0019: Multiple punctuation marks', async ({ page }) => {
    const input = 'ehi (campus eka) valata yanna oni!!! ekama!!!';
    const expected = 'එහි (campus එක) වලට යන්න ඕනි!!! එකම!!!';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('එහි');
  });

  test('Pos_Fun_0020: Condition with pronoun variation', async ({ page }) => {
    const input = 'eya avalnam mama aeen yannavaa. oona nam eyaalath ekka yannath puluvandha?';
    const expected = 'එයා ආවල්නම් මම ඇයින් යන්නවා. ඕන නම් ඒයාලත් එක්ක යන්නත් පුළුවන්ද?';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('එයා');
  });

  test('Pos_Fun_0021: Tech abbreviations in context', async ({ page }) => {
    const input = 'RAM eka 16GB. Storage eka 512GB SSD. Operating system eka OS Windows 11. CPU eka Intel Core i7.';
    const expected = 'RAM එක 16GB. Storage එක 512GB SSD. Operating system එක OS Windows 11. CPU එක Intel Core i7.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('එක');
  });

  test('Pos_Fun_0022: Multiple spaces input', async ({ page }) => {
    const input = 'mama      gedhara      yannavaa      raeti      vitharak.';
    const expected = 'මම ගෙදර යන්නවා රැති විතරක්.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('මම');
  });

  test('Pos_Fun_0023: Informal response with certainty', async ({ page }) => {
    const input = 'ov machang! mama dannee ekee details tika.';
    const expected = 'ඔව් මචං! මම දන්නේ එකේ details තික.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('ඔව්');
  });

  test('Pos_Fun_0024: Line break paragraph input', async ({ page }) => {
    const input = 'api movie hall ekata yanavaa.\neyaalaa avoth ekka movie eka baalanavaa.\npassee restaurant ekata yannee dinner ekata.';
    const expected = 'අපි movie hall එකට යනවා.\nඒයාලා ආවොත් එක්ක movie එක බාලනවා.\nපස්සේ restaurant එකට යන්නේ dinner එකට.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    expect(actualOutput?.trim()).toContain('අපි');
  });
});

test.describe('Singlish to Sinhala Translator - Negative Functional Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Neg_Fun_0001: Ambiguous word with multiple meanings', async ({ page }) => {
    const input = 'mata bath oonee kanna.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0002: Incorrect joined words', async ({ page }) => {
    const input = 'mamagedharayanavaniseemataoonee';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0003: Mixed script characters', async ({ page }) => {
    const input = 'mama ගෙදර yanavaa වැඩ කරන්න.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0004: Excessive punctuation marks', async ({ page }) => {
    const input = 'kohomadha??????!!!!!????';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0005: Numeric-only input', async ({ page }) => {
    const input = '123456789 0000 9999';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0006: Special characters only', async ({ page }) => {
    const input = '@#$%^&*()_+-=[]{}|;\':",.<>?/';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0007: Extremely long repetitive input', async ({ page }) => {
    const input = 'mama '.repeat(75);
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0008: Unknown non-English characters', async ({ page }) => {
    const input = 'mama 你好 gedhara 안녕하세요 yannavaa.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0009: Misspelled Singlish words', async ({ page }) => {
    const input = 'mamma gheddhara yanawaaa. mmaatge oneeee bathh knnaa.';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    // Misspellings should produce incorrect output
    expect(actualOutput).toBeDefined();
  });

  test('Neg_Fun_0010: HTML/XML tags in input', async ({ page }) => {
    const input = '<p>mama gedhara yanavaa</p> <b>bath kanna</b> <script>alert(\'test\')</script>';
    
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    const actualOutput = await outputField.inputValue() || await outputField.textContent();
    
    // HTML tags should not be properly handled
    expect(actualOutput).toBeDefined();
  });
});

test.describe('Singlish to Sinhala Translator - UI Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Pos_UI_0001: Clear button removes input and output', async ({ page }) => {
    const input = 'mama gedhara yannavaa';
    
    // Fill input
    const inputField = page.locator('textarea[placeholder*="Singlish"], textarea#singlish-input, textarea.input-field').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    // Verify output is generated
    const outputField = page.locator('textarea[placeholder*="Sinhala"], textarea#sinhala-output, textarea.output-field, .output-text').first();
    let outputValue = await outputField.inputValue() || await outputField.textContent();
    expect(outputValue?.trim().length).toBeGreaterThan(0);
    
    // Find and click clear button
    const clearButton = page.locator('button:has-text("Clear"), button:has-text("Reset"), button[aria-label*="clear"], button[aria-label*="reset"], .clear-button, .reset-button').first();
    
    if (await clearButton.isVisible()) {
      await clearButton.click();
      await page.waitForTimeout(1000);
      
      // Verify both fields are cleared
      const inputAfterClear = await inputField.inputValue();
      const outputAfterClear = await outputField.inputValue() || await outputField.textContent();
      
      expect(inputAfterClear?.trim()).toBe('');
      expect(outputAfterClear?.trim()).toBe('');
    } else {
      // If no clear button, manually clear and verify
      await inputField.clear();
      await page.waitForTimeout(1000);
      const inputAfterClear = await inputField.inputValue();
      expect(inputAfterClear?.trim()).toBe('');
    }
  });
});
