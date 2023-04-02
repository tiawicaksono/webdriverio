Feature: form page

  Scenario Outline: test chai form
    Given I am on the retribusi page "http://103.184.181.9/retribusi"
    When I enter no_uji <noUji> and no_kendaraan <noKendaraan> and no_mesin <noMesin> and no_chasis <noChasis> and jbb <jbb>
    And I select jenis_kendaraan <jenisKendaraan>
    And I enter nama_pemilik <namaPemilik> and alamat <alamat> and no_telp <noTelp>
    And I select jenis_pengujian <jenisPengujian> and kartu_uji <kartuUji>
    Then I click submit button
    And I select search_category <searchCategory> and enter search no_uji <searchTextField> and press enter

    Examples:
    | noUji         | noKendaraan | noMesin    | noChasis     | jbb  | jenisKendaraan | namaPemilik | alamat                 | noTelp | jenisPengujian | kartuUji | searchCategory | searchTextField | 
    | AJ011001123   | S 8001 UW   | 14B1743536 | BU4340006934 | 7500 | 4              | SAMSUL HUDA | SEGODOREJO  RT 02/02   | -      | 5              | 2        | no_uji_kend    | AJ011001123     |
