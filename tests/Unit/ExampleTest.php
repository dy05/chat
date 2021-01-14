<?php

namespace Tests\Unit;

use NumberFormatter;
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $region = 'en_US';
        $currency = 'USD';
        $formatter = new NumberFormatter($region, NumberFormatter::CURRENCY);
        var_dump($formatter->parseCurrency('1000', $currency));
//        $this->assertTrue(false, $formatter->parseCurrency(10, $currency));

//        die();
        $this->assertEquals('10,00 $US', $this->getFormattedPrice(10));
//        $this->assertSame('10,00 $US', $this->getFormattedPrice(10));
//        $this->assertTrue(true);
    }

    private function getFormattedPrice($price)
    {
//        return $price;
//        return $price.',00 $US';
        $region = 'en_US';
        $currency = 'USD';
//        $pattern = "#0.# \$US";
        $pattern = "#,## ¤US";
        $formatter = new NumberFormatter($region, NumberFormatter::PATTERN_RULEBASED, $pattern);
        return $formatter->formatCurrency(10, $currency);
//        return number_format($price, 2, ',');
//        return "10,00 \$US";
    }
}
